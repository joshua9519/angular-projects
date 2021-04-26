import * as ts from 'typescript';
import { normalize, Path, strings } from '@angular-devkit/core';
import {
    Rule,
    SchematicContext,
    Tree,
    apply,
    chain,
    mergeWith,
    template,
    url,
    move,
    MergeStrategy,
    SchematicsException
} from '@angular-devkit/schematics';
import { addDeclarationToModule, insertImport, addRouteDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change'
import { classify } from '@angular-devkit/core/src/utils/strings';

interface exerciseOptions {
    fullpath?: Path
    path: string,
    name: string,
    title: string,
    number?: string
}

function readIntoSourceFile(host: Tree, modulePath: string): ts.SourceFile {
    const text = host.read(modulePath);
    if (text === null) {
        throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');

    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}

// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
export default function (options: exerciseOptions): Rule {
    options.fullpath = normalize('src/app/' + options.name)
    const templateSource = apply(url('./files'), [
        template({
            title: options.title,
            name: options.name,
            classyName: classify(options.name) + 'Component',
        }),
        move(options.fullpath)
    ])


    // The chain rule allows us to chain multiple rules and apply them one after the other.
    return chain([
        (_tree: Tree, context: SchematicContext) => {
            // Show the options for this Schematics.
            context.logger.info('New exercise: ' + JSON.stringify(options));

            const modulePath = 'src/app/app.module.ts'
            const moduleSource = readIntoSourceFile(_tree, modulePath);
            const relativePath = './' + options.name + '/' + options.name + '.component';
            const classifiedName = strings.classify(options.name) + 'Component';
            const declarationChanges = addDeclarationToModule(moduleSource,
                modulePath,
                classifiedName,
                relativePath);
            const declarationRecorder = _tree.beginUpdate(modulePath);
            for (const change of declarationChanges) {
                if (change instanceof InsertChange) {
                    declarationRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            _tree.commitUpdate(declarationRecorder);

            const routesSource = readIntoSourceFile(_tree, 'src/app/app-routing.module.ts');
            const addRouteDeclaration = addRouteDeclarationToModule(
                routesSource,
                './src/app',
                `{ path: '${options.name}', component: ${classifiedName}}`
            ) as InsertChange;
            const importChanges = insertImport(
                routesSource,
                'src/app/app-routing.module.ts',
                classifiedName,
                `./${options.name}/${options.name}.component`
            );
            const addRoutingRecorder = _tree.beginUpdate('src/app/app-routing.module.ts');
            addRoutingRecorder.insertLeft(addRouteDeclaration.pos, addRouteDeclaration.toAdd);
            if (importChanges instanceof InsertChange) {
                addRoutingRecorder.insertRight(importChanges.pos, importChanges.toAdd);
            }
            _tree.commitUpdate(addRoutingRecorder);
        },

        // The mergeWith() rule merge two trees; one that's coming from a Source (a Tree with no
        // base), and the one as input to the rule. You can think of it like rebasing a Source on
        // top of your current set of changes. In this case, the Source is that apply function.
        // The apply() source takes a Source, and apply rules to it. In our case, the Source is
        // url(), which takes an URL and returns a Tree that contains all the files from that URL
        // in it. In this case, we use the relative path `./files`, and so two files are going to
        // be created (test1, and test2).
        // We then apply the template() rule, which takes a tree and apply two templates to it:
        //   path templates: this template replaces instances of __X__ in paths with the value of
        //                   X from the options passed to template(). If the value of X is a
        //                   function, the function will be called. If the X is undefined or it
        //                   returns null (not empty string), the file or path will be removed.
        //   content template: this is similar to EJS, but does so in place (there's no special
        //                     extension), does not support additional functions if you don't pass
        //                     them in, and only work on text files (we use an algorithm to detect
        //                     if a file is binary or not).
        mergeWith(templateSource, MergeStrategy.Overwrite),
    ]);
}
