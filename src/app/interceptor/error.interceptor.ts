import { CustomerService } from './../service/customer.service';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const custService = inject(CustomerService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.log('Unauthorized');
        
        const isContinue = confirm("Are you sure you want to continue?");
        
        if (isContinue) {
          custService.tokenExpired$.next(true);
        }
      }
      // Re-throw the error to continue the flow
      return throwError(() => error);
    })
  );

};
