import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  loginObj: any = {
    username: '',
    password: '',
  }

  onLogin(){
    console.log(this.loginObj);
    if(this.loginObj.username == 'admin' && this.loginObj.password == 'admin@123'){
      console.log('Login Successfull');
      this.router.navigateByUrl("admin");

    }else{
      alert('wrong credentials');
    }
  }

}
