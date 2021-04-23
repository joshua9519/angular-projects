import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { AuthorsComponent } from './part2/authors/authors.component';
import { Part3Component } from './part3/part3.component';
import { TitleCaseExceptPipe } from './part3/title-case-except.pipe';
import { FavouriteComponent } from './part3/favourite/favourite.component';
import { TitleCaseComponent } from './part3/title-case/title-case.component';
import { FormsModule } from '@angular/forms';
import { Part4Component } from './part4/part4.component';
import { LikeComponent } from './part4/like/like.component';
import { HomeComponent } from './home/home.component';
import { Part5Component } from './part5/part5.component';
import { ZippyComponent } from './part5/zippy/zippy.component';
import { Part6Component } from './part6/part6.component';
import { CourseFormComponent } from './part6/course-form/course-form.component';
import { Part7Component } from './part7/part7.component';
import { SignupFormComponent } from './part7/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    AuthorsComponent,
    Part3Component,
    TitleCaseExceptPipe,
    FavouriteComponent,
    TitleCaseComponent,
    Part4Component,
    LikeComponent,
    HomeComponent,
    Part5Component,
    ZippyComponent,
    Part6Component,
    CourseFormComponent,
    Part7Component,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
