import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  regUser(user) {
    return this.http.post('http://localhost:8080/reg', user)
      .pipe(catchError(this.errorHandler));
  }

  authUser(user) {
    return this.http.post<any>('http://localhost:8080/auth/signin', user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || "Server error");
  }
}
