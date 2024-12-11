import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstname: String = "Shahid";
  placeholder: String = "Enter your full name."
  rollNo: number = 75;
  isActive: boolean = true;
  currentDate: Date = new Date();
  divClass: String = "bg-success";
  selectedOption: String = "";

  constructor(private router: Router){
    console.log(this.firstname);
  //  this.showMessage()
  }

  navigatetoadmin(){
    this.router.navigateByUrl('/admin');
  }

  showMessage(){
    alert("Hello, World!");
  }

  onCityChange(){
    console.log("City changed");
  }

}
