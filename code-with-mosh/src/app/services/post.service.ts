import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        map(data => { return data }),
        catchError((error: Response) => {
          if (error.status === 400) {
            return throwError(new BadRequestError());
          }
          return throwError(new AppError(error));
        })
      )
    ;
  }

  updatePost(postId) {
    return this.http.patch(this.url + '/' + postId, JSON.stringify({ isRead: true }));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
      .pipe(
        map(data => { return data }),
        catchError((error: Response) => {
          if (error.status === 404) {
            return throwError(new NotFoundError());
          }
          return throwError(new AppError(error));
        })
      )
  }
}
