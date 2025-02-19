import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)
  http = inject(HttpClient);
  custService = inject(CustomerService)

  constructor(){
    this.custService.tokenExpired$.subscribe((res: boolean) => {
      if(res){
        debugger;
        const authUserData = localStorage.getItem('authUser');
        if(authUserData){
          const authUser = JSON.parse(authUserData);
          const authObj = {
            "emailId": authUser.emailId,
            "refreshToken": authUser.refreshToken,
            "token": authUser.token
          }
          this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh", authObj).subscribe((res: any) => {
            localStorage.setItem("authUser", JSON.stringify(res.data));
            localStorage.setItem("authToken",res.data.token);
            this.custService.tokenRecived$.next(true);
          })
        }
      }
    })
  }

  onLogout(){
    localStorage.removeItem('authUser');
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('login');
  }

}
