import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgrssBarComponent } from "../common/progressbar/progrss-bar/progrss-bar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgrssBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
