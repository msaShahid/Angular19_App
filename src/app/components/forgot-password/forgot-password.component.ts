import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  isResetForm: boolean = false;

  resetObj: any = {
    "Email": "",
    "Otp":  "",
    "NewPassword": "",
  }

  sentOtp(){
    this.isResetForm = true;
    console.log('otp');
  }

  resetPassword(){
    
  }

}
