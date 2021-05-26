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
    this.service.getAll()
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
    this.posts.splice(0, 0, post)
    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = (response as any).id
        },
        (error: AppError) => {
          this.posts.splice(0, 1)

          if (error instanceof BadRequestError) {

          } else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.update(post.id)
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
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        response => {
          console.log(response)
        },
        (error: AppError) => {
          this.posts.splice(index, 0, post)
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
          
        });
  }
}