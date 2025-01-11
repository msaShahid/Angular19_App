import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://freeapi.miniprojectideas.com/api/carRentalApp";
  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get(`${this.apiUrl}/GetCustomers`).pipe(
      catchError(this.handleError)
    )
  }

  createNewCustomer(obj: any){
    return this.http.post(`${this.apiUrl}/CreateNewCustomer`, obj).pipe(
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
