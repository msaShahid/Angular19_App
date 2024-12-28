import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { IUserDetails } from '../../../model/interface/master';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-get-api',
  imports: [NgxSpinnerModule, CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: IUserDetails[] = [];

  constructor(private masterService: MasterService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails(){
    this.spinner.show()
    this.masterService.getUser().subscribe({
      next: (response: IUserDetails[]) => {
        this.userList = response;
        this.spinner.hide()
      },
      error: (error: any) => {
        console.error('Error fetching data : ', error);
        this.spinner.hide()
      }
    });
  }

}
