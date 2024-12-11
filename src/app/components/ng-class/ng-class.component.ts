import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgColor: string = "bg-success";
  isChecked: boolean = false;
  div3Classname: string = '';

  addDivColor(className: string){
    this.divBgColor = className;
  }

}
