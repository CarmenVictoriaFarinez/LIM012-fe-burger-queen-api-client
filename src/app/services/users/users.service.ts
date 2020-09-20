import { User } from './../../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;

  constructor(private http:HttpClient) { 
    this.url = environment.apiUrl;
  }

  getPersonas() {
    return this.http.get<User[]>(`${this.url}users`);
  }

  createPersona(persona:User){
    return this.http.post<User>(`${this.url}users`, persona);
    // return this.http.post<any>(`${this.url}auth`, user)
    // this.http.post('https://burguerqueen-sc.herokuapp.com/orders', order)
  }
}
