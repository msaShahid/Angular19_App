import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName = signal<string>("Michael");
  lastName  = signal<string>("Rose");

  fullName = linkedSignal({
    source:this.firstName,
    computation: (current, previous) => {
      const fullName = current + " "+ this.lastName()
      return fullName;
    }
  })

  user = signal({id:21,name:"Rachel"})
  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
   // equal: (a: any, b: any) => a.id === b.id
    equal: (a: any, b: any) => a.id !== b.id
  })

  chnageName(){
    this.firstName.set("Mike")
  }

  chnageEmail(){
    this.user.set({id:28,name:"maggie"})
  }

}
