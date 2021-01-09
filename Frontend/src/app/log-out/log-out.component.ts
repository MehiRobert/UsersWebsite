import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('loggedIn');
    this.route.navigate(['login']);
  }

}
