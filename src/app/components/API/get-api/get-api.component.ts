import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { IUserDetails } from '../../../model/interface/master';

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
    this.masterService.getUser().subscribe((response: IUserDetails[]) => {
      this.userList = response;
    })
  }

}
