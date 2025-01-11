import { CustomerService } from './../../service/customer.service';
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

  constructor(private customerService: CustomerService) { 
    this.loadCustomerData();
  }

  loadCustomerData(){
    this.customerService.getCustomers().subscribe((res: any) =>{
      this.customerDetails = res.data;
    });
  }



}
