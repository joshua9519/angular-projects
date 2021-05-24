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
export class DataService {
    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url).pipe(map(data => data), catchError(this.handleError));
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(data => { return data }),
                catchError(this.handleError)
            )
            ;
    }

    update(id) {
        return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
            .pipe(catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(
                map(data => { return data }),
                catchError(this.handleError)
            )
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return throwError(new BadRequestError());
        }

        if (error.status === 404) {
            return throwError(new NotFoundError());
        }

        return throwError(new AppError(error));
    }
}
