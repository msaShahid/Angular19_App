import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)
  custService = inject(CustomerService)

  constructor(){
    this.custService.tokenExpired$.subscribe((res: boolean) => {
      if(res){
        this.router.navigate(['/login']);
      }
    })
  }

  onLogout(){
    localStorage.removeItem('authUser');
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('login');
  }

}
