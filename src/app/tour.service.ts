import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tour } from './model/Tour';
import { Preorder } from './model/Preorder';
import { Bill } from './model/Bill';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }

  filterTour(filterModel: Tour): Observable<Tour[]>{
    return this.http.post<Tour[]>('http://localhost:8080/packages/filter', filterModel)
    .pipe(catchError(this.errorHandler));
  }

  getBill(preOrder: Preorder): Observable<Bill>{
    return this.http.post<Bill>('http://localhost:8080/packages/preOrder', preOrder)
    .pipe(catchError(this.errorHandler));
  }

  setOrder(preOrder: Preorder): any{
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log(headers);
    return this.http.post<any>('http://localhost:8080/packages/order', preOrder, {headers})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error|| "Server error");
  }
}
