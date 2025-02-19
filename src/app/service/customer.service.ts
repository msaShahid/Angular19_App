import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://freeapi.miniprojectideas.com/api/carRentalApp";
  constructor(private http: HttpClient) { }

  tokenExpired$: Subject<boolean> = new Subject<boolean>(); 
  tokenRecived$: Subject<boolean> = new Subject<boolean>(); 

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

  updateExistingCustomer(obj: any){
    return this.http.put(`${this.apiUrl}/UpdateCustomer`, obj).pipe(
      catchError(this.handleError)
    )
  }

  deleteCustomer(id: number){
    return this.http.delete(`${this.apiUrl}/DeletCustomerById?id=${id}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any) {

    let errorMessage = 'An unknown error occurred!';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 0) {
        errorMessage = 'Network error. Please check your connection.';
      } else if (error.status === 400) {
        errorMessage = 'Bad request. Please check the customer ID.';
      } else if (error.status === 404) {
        errorMessage = 'Customer not found.';
      } else if (error.status === 500) {
        errorMessage = 'Internal server error. Please try again later.';
      } else {
        errorMessage = `Error: ${error.message || error.statusText}`;
      }
    }
    
    console.error('API Error: ', error);
    return throwError(() => new Error(errorMessage));
  }

}
