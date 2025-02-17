import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);
  http = inject(HttpClient)

  loginObj: any = {
    username: '',
    password: '',
  }
  // adminsd@gmail.com & admin123
  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  onLogin(){
    console.log(this.apiLoginObj);
    // if(this.loginObj.username == 'admin' && this.loginObj.password == 'admin@123'){
    //   console.log('Login Successfull');
    //   this.router.navigateByUrl("admin");

    // }else{
    //   alert('wrong credentials');
    // }

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res:any) => {
    console.log(res);
     localStorage.setItem("user",res.data.userId);
     this.router.navigateByUrl("admin");
    },
    error => {
      alert('wrong credentials');
    });
  }

}
