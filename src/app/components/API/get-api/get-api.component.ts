import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { IUserDetails } from '../../../model/interface/master';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: IUserDetails[] = [];

  constructor(private masterService: MasterService){}

  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails(){
    this.masterService.getUser().subscribe({
      next: (response: IUserDetails[]) => {
        this.userList = response;
      },
      error: (error: any) => {
        console.error(error); 
      }
    });
  }

}
