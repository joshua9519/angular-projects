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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Part4Component } from './part4/part4.component';
import { LikeComponent } from './part4/like/like.component';
import { HomeComponent } from './home/home.component';
import { Part5Component } from './part5/part5.component';
import { ZippyComponent } from './part5/zippy/zippy.component';
import { Part6Component } from './part6/part6.component';
import { CourseFormComponent } from './part6/course-form/course-form.component';
import { Part7Component } from './part7/part7.component';
import { SignupFormComponent } from './part7/signup-form/signup-form.component';
import { Part8Component } from './part8/part8.component';
import { ChangePasswordFormComponent } from './part8/change-password-form/change-password-form.component';
import { Part9aComponent } from './part9a/part9a.component';
import { PostsComponent } from './part9a/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { FollowersService } from './services/followers.service';
import { Part9bComponent } from './part9b/part9b.component';
import { FollowerComponent } from './part9b/follower/follower.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Part10aComponent } from './part10a/part10a.component';
import { GithubFollowersComponent } from './part10a/github-followers/github-followers.component';
import { GithubProfileComponent } from './part10a/github-profile/github-profile.component';
import { Part10bComponent } from './part10b/part10b.component';
import { ArchiveComponent } from './part10b/archive/archive.component';
import { ArchiveHomeComponent } from './part10b/archive-home/archive-home.component';

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
    SignupFormComponent,
    Part8Component,
    ChangePasswordFormComponent,
    Part9aComponent,
    PostsComponent,
    Part9bComponent,
    FollowerComponent,
    NotFoundComponent,
    Part10aComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    Part10bComponent,
    ArchiveComponent,
    ArchiveHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
