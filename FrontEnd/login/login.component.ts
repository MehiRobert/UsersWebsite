import { Component, OnInit } from '@angular/core';
import {AuthService} from '../AuthService/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private Authentification: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event): void{
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Authentification.getUserDetails(username, password)
      .subscribe(data => {
        if (data.connecte === 'true')
        {
          if (data.type === 'admin')
          {
            this.router.navigate(['admin']);
          }
          else {
            this.router.navigate([data.type.concat('/', username)]);
            this.Authentification.setLoggedIn(true);
            console.log(data);
          }
          this.Authentification.setLoggedIn(true);
        }
        else {
          window.alert('Invalid');
          localStorage.removeItem('loggedIn');
        }
      });
  }
}
