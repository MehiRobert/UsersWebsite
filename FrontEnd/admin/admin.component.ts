import { Component, OnInit } from '@angular/core';
import {BasicUser} from '../basic-user';
import {UsersService} from '../UserService/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  User: BasicUser = new BasicUser();
  submitted = false;
  constructor(private UserService: UsersService) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.User = new BasicUser();
  }


  onSubmit(event): void {

    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#name').value;
    const email = target.querySelector('#mail').value;
    const password = target.querySelector('#password').value;
    const country = target.querySelector('#country').value;
    this.User.name = username;
    this.User.password = password;
    this.User.mail = email;
    this.User.country = country;
    console.log(this.User.name, this.User.country, this.User.mail, this.User.password);

    this.UserService.createUser(this.User);

  }
}

