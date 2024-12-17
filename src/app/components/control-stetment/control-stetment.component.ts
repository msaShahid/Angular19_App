import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-stetment',
  imports: [FormsModule],
  templateUrl: './control-stetment.component.html',
  styleUrl: './control-stetment.component.css'
})
export class ControlStetmentComponent {

  div1Visiable: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  cityList: string [] = [
    "Pune",
    "Mumbai",
    "Thane",
    "Panji",
    "Hyderabad"
  ]

  employeObject: any[] = [
    {"empid":101,"name": "Rahul", "age": 25, "city": "Pune"},
    {"empid":102,"name": "Zess", "age": 25, "city": "Nagpur"},
    {"empid":103,"name": "Alex", "age": 25, "city": "Thane"},
    {"empid":104,"name": "Rohan", "age": 25, "city": "Mumbai"},
    
  ]

  hideandshow(val: boolean){
    this.div1Visiable = val
  }



}
