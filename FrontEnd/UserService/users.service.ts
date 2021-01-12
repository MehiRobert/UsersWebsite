import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicUser} from '../basic-user';
import {RegionalUser} from '../regional-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {

  }

  createUser(User: BasicUser): any{
    this.http.post('http://localhost:8080/api/admin/BasicUser', {
      name : User.name,
      mail : User.mail,
      password : User.password,
      country : User.country
    }).subscribe();
  }
  createRegionalUser(RUser: RegionalUser): any
  {
    this.http.post('http://localhost:8080/api/admin/RegionManager', {
        name: RUser.name,
        mail: RUser.mail,
        password: RUser.password,
        Countries: RUser.countries
      }
    ).subscribe();
  }

  getData(): Observable<any>  {
      // return this.http.get('http://localhost:8080/api/admin')
      //   .subscribe(data => console.log('We got ', data));
    return this.http.get('/api/admin');
  }
  getUserData(): any {
    return this.http.get('http://localhost:8080/api/admin')
     .subscribe(data => console.log('We got ', data));
  }
  getBasicUserData(BasicUserUrl: string): any {
    return this.http.get('http://localhost:8080/api/' + BasicUserUrl);
  }
  getRegionalManagerData(RegionalManagerUrl: string): any {
    return this.http.get('http://localhost:8080/api/' + RegionalManagerUrl);
  }

}
