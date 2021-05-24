import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = (response as any[]);
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = (response as any).id
          this.posts.splice(0, 0, post);
          console.log(response)
        },
        (error: AppError) => {
          if (error instanceof BadRequestError) {

          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(3456)
      .subscribe(
        response => {
          console.log(response)
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
          
        });
  }
}