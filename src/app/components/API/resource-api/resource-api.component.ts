import { CommonModule } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

  userList = resource({
    loader: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return await (res.json() as Promise<any[]>);
    }
  })


}
