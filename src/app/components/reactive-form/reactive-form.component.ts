import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  useForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(""),
    country: new FormControl(""),
    state: new FormControl("Goa"),
    city: new FormControl(""),
    zipcode: new FormControl(""),
    isTermsAggree:  new FormControl(false)
  })

  onUserSave(){
    console.log(this.useForm.value);
  }
}
