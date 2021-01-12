import { Component, OnInit } from '@angular/core';
import {RegionalUser} from '../regional-user';
import {UsersService} from '../UserService/users.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insert-regional-user',
  templateUrl: './insert-regional-user.component.html',
  styleUrls: ['./insert-regional-user.component.css']
})
export class InsertRegionalUserComponent implements OnInit {

  RegionalUser: RegionalUser = new RegionalUser();
  submitted = false;
  constructor(private UserService: UsersService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(event): void {

    event.preventDefault();
    // const target = event.target;
    // const username = target.querySelector('#name').value;
    // const email = target.querySelector('#mail').value;
    // const password = target.querySelector('#password').value;
    // const country = target.querySelector('#country').value;
    // this.User.name = username;
    // this.User.password = password;
    // this.User.mail = email;
    // this.User.country = country;
    console.log(this.RegionalUser.name, this.RegionalUser.countries, this.RegionalUser.mail, this.RegionalUser.password);
    const listOfCountries = this.RegionalUser.countries.split(',', 4);
    console.log(listOfCountries);
    this.RegionalUser.countries = listOfCountries;
    console.log(this.RegionalUser);
    this.UserService.createRegionalUser(this.RegionalUser);


  }

  resetRForm(addRForm: NgForm): any {
    addRForm.reset();
  }
}
