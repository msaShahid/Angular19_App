import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { IUserDetails } from '../../../model/interface/master';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({ 
  selector: 'app-get-api',
  imports: [NgxSpinnerModule, CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: IUserDetails[] = [];
  productList: any = [];

  constructor(private masterService: MasterService){}

  ngOnInit(): void {
    this.getUserDetails()
    this.getproductName()
  }

  getproductName(){
    this.masterService.getproduct().subscribe({
      next: (response) => {
       this.productList = response
      }
    })
  }

  getUserDetails(){
    this.masterService.getUser().subscribe({
      next: (response: IUserDetails[]) => {
        this.userList = response;
      },
      error: (error: any) => {
        console.error('Error fetching data : ', error);
      }
    });
  }

}
