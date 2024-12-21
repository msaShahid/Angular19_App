import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userObj = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    city: '',
    state: '',
    country: '',
    zipcode: '',
    isTermsAggree: false,
  };


  countries = ['India', 'USA', 'Canada'];
  cities = ['Mumbai', 'West Bengal', 'Delhi', 'Bangalore'];

  states: { [country: string]: string[] } = {
    India: ['Maharashtra', 'Delhi','Goa', 'West Bengal', 'Chhattisgarh'],
    USA: ['California', 'Texas', 'Florida', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  };

  citiesByState: { [state: string]: string[] } = {
    Maharashtra: ['Mumbai', 'Pune'],
    Delhi: ['New Delhi'],
    Goa: ['Panaji', 'Margao'],
    'West Bengal': ['Kolkata','Darjeeling','Siliguri','Asansol'],
    Chhattisgarh: ['Raipur','Bhilai-Durg','Bilaspur','Raigarh'],
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Austin'],
    Florida: ['Miami', 'Orlando'],
    'New York': ['New York City', 'Buffalo'],
    Ontario: ['Toronto', 'Ottawa'],
    Quebec: ['Montreal', 'Quebec City'],
    'British Columbia': ['Vancouver', 'Victoria'],
    Alberta: ['Calgary', 'Edmonton'],
  };

  onCountryChange() {
    this.userObj.state = '';
    this.userObj.city = '';
  }

  onStateChange() {
    this.userObj.city = '';
  }

  getStatesForCountry(country: string): string[] {
    return this.states[country] || [];
  }

  getCitiesForState(state: string): string[] {
    return this.citiesByState[state] || [];
  }

 onSave(){
  const formValue = this.userObj;
  console.log(formValue);
 }

}
