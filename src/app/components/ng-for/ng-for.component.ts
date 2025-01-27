import {JsonPipe, NgFor, UpperCasePipe,LowerCasePipe, DatePipe,  } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Pune","Nagpur","Jaipur","Mumbai","Thane"];
  currentDate: Date = new Date();

  employeObject: any[] = [
    {"empid":101,"name": "Rahul", "age": 25, "city": "Pune"},
    {"empid":102,"name": "Zess", "age": 25, "city": "Nagpur"},
    {"empid":103,"name": "Alex", "age": 25, "city": "Thane"},
    {"empid":104,"name": "Rohan", "age": 25, "city": "Mumbai"},
    
  ]

}
