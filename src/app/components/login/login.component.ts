import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username: '',
    password: '',
  }

  onLogin(){
    console.log(this.loginObj);
    if(this.loginObj.username == 'admin' && this.loginObj.password == 'admin@123'){
      console.log('Login Successfull');

    }else{
      alert('wrong credentials');
    }
  }

}
