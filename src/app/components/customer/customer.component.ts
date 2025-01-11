import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObject: any = {
    "customerId": 0,
    "customerName": "",
    "customerMobile": "",
    "customerEmail": "",
    "customerCity": ""
  };

  customerDetails: any [] = [];

  constructor(private http: HttpClient){
    this.getCustomer();
  }

  getCustomer(){
    this.http.get("https://freeapi.miniprojectideas.com/api/carRentalApp/GetCustomers").subscribe((res: any) => {
      this.customerDetails = res.data;
    })

  }

}
