import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/carRentalApp/GetCustomers").pipe(
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
