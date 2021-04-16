import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CapFirstLetterComponent } from './cap-first-letter/cap-first-letter.component';
import { FormsModule } from '@angular/forms';
import { TitleCaseExceptPipe } from './title-case-except.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    CapFirstLetterComponent,
    TitleCaseExceptPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
