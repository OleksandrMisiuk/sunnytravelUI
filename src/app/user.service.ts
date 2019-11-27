import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Role } from './model/Role';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  @Output()
  change: EventEmitter<any> = new EventEmitter();

  regUser(user) {
    return this.http.post('http://localhost:8080/reg', user)
      .pipe(catchError(this.errorHandler));
  }

  authUser(user) {
    return this.http.post<any>('http://localhost:8080/auth/signin', user)
      .pipe(catchError(this.errorHandler));
  }

  userRoles(id: number): Observable<Role[]>{
    let headers = new HttpHeaders;
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Role[]>('http://localhost:8080/admin/' + id +'/roles', {headers})
    .pipe(catchError(this.errorHandler));
  }

  allUsers() : Observable<User[]>{
    let headers = new HttpHeaders;
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<User[]>('http://localhost:8080/admin/users', {headers})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || "Server error");
  }

  setRoles(roles:Number[], id: Number) {
    let headers = new HttpHeaders;
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put('http://localhost:8080/admin/' + id + '/set-roles', roles, { headers })
    .pipe(catchError(this.errorHandler));
  }

  allRoles(): Observable<Role[]>{
    let headers = new HttpHeaders;
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Role[]>('http://localhost:8080/admin/allRoles', { headers })
    .pipe(catchError(this.errorHandler));
  }

  removeUsersTour(username: string): Observable<Boolean> {
    let headers = new HttpHeaders;
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<Boolean>('http://localhost:8080/packages/removeTour', username, { headers })
    .pipe(catchError(this.errorHandler));
  }

}
