import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progrss-bar',
  imports: [NgStyle, NgClass],
  templateUrl: './progrss-bar.component.html',
  styleUrl: './progrss-bar.component.css'
})
export class ProgrssBarComponent {

  @Input() progressValue: number = 0
  @Input() bgColor: string = 'bg-success'; 

}
