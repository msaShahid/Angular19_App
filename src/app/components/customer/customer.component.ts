import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../../service/customer.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../common/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerTabs = ["Payment Info","Plan Info","Payment Mode"]

  customerObject: any = {
    "customerId": 0,
    "customerName": "",
    "mobileNo": "",
    "email": "",
    "customerCity": ""
  };
  isDeleting = false;
  customerDetails: any [] = [];

  constructor(private customerService: CustomerService, private http: HttpClient, private custService: CustomerService) { 
    this.loadCustomerData();
    this.custService.tokenRecived$.subscribe((res) => {
      if(res){
        this.loadCustomerData();
      }
    })
  }

  loadCustomerData(){
    this.customerService.getCustomers().subscribe((res: any) =>{
      this.customerDetails = res.data;
    });
  }

  saveCustomer(){
   // debugger;
    this.customerService.createNewCustomer(this.customerObject).subscribe((res:any) => {
      if(res.result){
     //   debugger;
        alert("Customer created successfully");
        this.loadCustomerData();
      }else{
        alert("Failed to create customer");
      }
    })
  }

  onEdit(data: any){
    this.customerObject = data
  }

  updateCustomer(){
    this.customerService.updateExistingCustomer(this.customerObject).subscribe((res: any) =>{
      if(res.result){
        alert("Customer updated successfully");
        this.loadCustomerData();
      }else{
        alert("Failed to update customer");
      }
    })
  }
  


  confirmDelete(customerId: number) {
    const isConfirmed = confirm('Are you sure you want to delete this customer?');
    
    if (isConfirmed && !this.isDeleting) { 
      this.isDeleting = true;
      this.onDelete(customerId);
    }
  }
  
  onDelete(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (res: any) => {
        this.isDeleting = false; 
        if (res.result) {
          alert("Customer deleted successfully");
          this.loadCustomerData();
        } else {
          alert("Failed to delete customer");
        }
      },
      error: (err) => {
        this.isDeleting = false; 
        alert("An error occurred while deleting the customer.");
      }
    });
  }
  
}
