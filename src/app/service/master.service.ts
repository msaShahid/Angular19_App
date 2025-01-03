import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUserDetails } from '../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUserDetailsUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUser(): Observable<IUserDetails[]> {
    return this.http.get<IUserDetails[]>(`${this.apiUserDetailsUrl}`).pipe(
      catchError(this.handleError)
    )
  }

  getproduct(){
    return this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = 'Something went wrong, please try again later.';
    
    if (error.status === 404) {
      errorMessage = 'The requested resource could not be found.';
    } else if (error.status === 500) {
      errorMessage = 'There was an issue with the server, please try again later.';
    } else {
      console.error('Unknown Error: ', error.message);
    }
    return throwError(() => new Error(errorMessage));
  }

}
