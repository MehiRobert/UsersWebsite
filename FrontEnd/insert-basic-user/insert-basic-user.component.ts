import { Component, OnInit } from '@angular/core';
import {BasicUser} from '../basic-user';
import {UsersService} from '../UserService/users.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-insert-basic-user',
  templateUrl: './insert-basic-user.component.html',
  styleUrls: ['./insert-basic-user.component.css']
})
export class InsertBasicUserComponent implements OnInit {

  User: BasicUser = new BasicUser();
  submitted = false;
  constructor(private UserService: UsersService) { }

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
    console.log(this.User.name, this.User.country, this.User.mail, this.User.password);

    this.UserService.createUser(this.User);


  }
  resetForm(addForm: NgForm): any
  {
    addForm.reset();
  }

}
