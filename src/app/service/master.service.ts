import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDetails } from '../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUserDetailsUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUser(): Observable<IUserDetails[]> {
    return this.http.get<IUserDetails[]>(`${this.apiUserDetailsUrl}`);
  }

}
