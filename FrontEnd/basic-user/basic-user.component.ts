import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../UserService/users.service';
import {BasicUser} from '../basic-user';
import {Country} from '../country/country';

@Component({
  selector: 'app-basic-user',
  templateUrl: './basic-user.component.html',
  styleUrls: ['./basic-user.component.css']
})
export class BasicUserComponent implements OnInit {

  BasicUserCountry: Country =  new Country();
  Name: string;
  Surname: string;
  constructor(private route: Router, private UserService: UsersService) { }

  ngOnInit(): void {
    const Initials = this.route.url.split('/', 5);
    const nameAndSurname = Initials.pop().split('%20');
    this.Name = nameAndSurname.pop();
    this.Surname = nameAndSurname.pop();
    this.UserService.getBasicUserData(this.route.url).subscribe(data =>
      {
        this.BasicUserCountry = data;
      }
    );
  }

}
