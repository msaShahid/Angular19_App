import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  useForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]), 
    country: new FormControl('', Validators.required),
    state: new FormControl('Goa', Validators.required),
    city: new FormControl('', Validators.required),
    zipcode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]), 
    isTermsAggree: new FormControl(false, Validators.requiredTrue) 
  });


  constructor(){
    this.useForm.controls['state'].disable();
    setTimeout(()=> {
      this.useForm.controls['state'].enable();
    },5000);
  }

  onUserSave(){
    console.log(this.useForm.value);
  }
}
