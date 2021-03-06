import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthConfigService {
  private currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser'));;
  public currentUser = this.currentUserSubject.asObservable();
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  // login(user: any): Observable<any> { // usandose
  //   return this.http.post<any>(`${this.url}auth`, user); // create
  // }

  setToken(token: string): void {  // usandose
    return sessionStorage.setItem('token', token);
  }

  getUser(idUser): any { // peticion de user id
    return this.http.get(`${this.url}users/${idUser}`); // read
  }

  isAuth() {
    return !!sessionStorage.getItem('currentUser'); // !! vuelve boolean
  }

  // isAdmin() { 
  //   // guardar role
  //   // validas si es admin
  //   return !!sessionStorage.getItem('currentUser'); // !! vuelve boolean
  // }

  checkUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}auth`, user)
      .pipe(map(userLogged => {
            sessionStorage.setItem('currentUser', userLogged['token']);
            console.log("user123", user);
            
            this.currentUserSubject.next(user);
            return userLogged;
      }));
    }

  // getToken(): string { // no se usa ahora
  //   return sessionStorage.get('token');
  // }

  // getUserLogged(): any { // no se usa ahora
  //   const token = this.getToken();
  //   // Aquí iría el endpoint para devolver el usuario para un token
  // }

  logout(): void { // usandose
    sessionStorage.clear();
    // sessionStorage.removeItem('currentUser');
    // sessionStorage.removeItem('emailCurrentUser');
    this.currentUserSubject.next(null);
  }
}
