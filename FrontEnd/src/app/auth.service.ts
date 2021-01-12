import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  // loggedStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean): void
  {
    this.loggedStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(): boolean{
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedStatus.toString());
    // return this.loggedStatus;
  }
  getUserDetails(username, password): any {
    // post these details to the User and return if it is correct;
    return this.http.post('http://localhost:8080/api/v1/login', {
      username,
      password
    });
  }
}
