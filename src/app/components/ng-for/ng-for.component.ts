import {JsonPipe, NgFor, UpperCasePipe,LowerCasePipe, DatePipe,  } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipesPipe } from '../pipes/custom-pipes.pipe';
import { ProgrssBarComponent } from "../common/progressbar/progrss-bar/progrss-bar.component";

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, CustomPipesPipe, ProgrssBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Pune","Nagpur","Jaipur","Mumbai","Thane"];
  currentDate: Date = new Date();

  employeObject: any[] = [
    {empid:101,name: "Rahul", age: 25, city: "Pune", attendance: 40},
    {empid:102,name: "", age: 25,attendance: 75},
    {empid:103,name: "Alex", age: 25, city: "Thane",attendance: 72},
    {empid:104,name: "Rohan", age: 25, city: "Mumbai",attendance: 100},
    
  ]

  getAttendanceClass(attendance: number): string {
    if (attendance < 50) {
      return 'bg-danger'; 
    } else if (attendance < 75) {
      return 'bg-warning'; 
    } else {
      return 'bg-success'; 
    }
  }
  

}
