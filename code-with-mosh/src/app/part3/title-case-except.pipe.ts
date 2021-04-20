import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseExcept'
})
export class TitleCaseExceptPipe implements PipeTransform {

  transform(value: string): string {
    let words = value.split(" ");

    for (var i = 0; i < words.length; i++) {
      let word = words[i]
      if (this.notPreposition(word) || i == 0) {
        words[i] = this.toTitleCase(word);
      } else {
        words[i] = word.toLowerCase();
      }
    }

    return words.join(" ")
  }

  private notPreposition(word: string): boolean {
    let noCaps = ["of", "the"];

    return !noCaps.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

}
