import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  firstName = signal<string>("Alex")
  lastName = signal<string>("William")
  course = "AI for Everyone"
  countNum = signal<number>(0);

  constructor(){
    const value = this.firstName();
    
    setTimeout(() => {
      this.course = "Deep Learning"
      this.firstName.set("Harvey");
    },5000)

  }

 
  onIncrement(){
    this.countNum.update(value => value+1)
  }

  onDecrement(){
    this.countNum.update(value => value-1)
  }


}


