import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  http = inject(HttpClient);

  emailId: string = '';
  isResetForm: boolean = false;

   resetObj: any = {
    "Email": "",
    "Otp":  "",
    "NewPassword": "",
  }

  sentOtp(){
    this.isResetForm = true;

    this.http.post(`https://projectapi.gerasim.in/api/UserApp/send-reset-otp?emailId=${this.emailId}`,{}).subscribe((res) => {
      console.log(res);
      alert('Otp sent to your email');
    })
    console.log('otp');
  }

  resetPassword(){

  }

}
