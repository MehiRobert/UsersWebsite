import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {Router} from '@angular/router';
import {UsersService} from '../users.service';
import {formatI18nPlaceholderName} from '@angular/compiler/src/render3/view/i18n/util';

@Component({
  selector: 'app-regional-user',
  templateUrl: './regional-user.component.html',
  styleUrls: ['./regional-user.component.css']
})
export class RegionalUserComponent implements OnInit {

  countries: Array<Country>;
  Name: string;
  Surname: string;
  constructor(private route: Router, private RegionManager: UsersService) { }

  ngOnInit(): void {
    const Initials = this.route.url.split('/', 5);
    const nameandsurname = Initials.pop().split('%20');
    this.Name = nameandsurname.pop();
    this.Surname = nameandsurname.pop();
    this.RegionManager.getRegionalManagerData(this.route.url).subscribe(data =>
      {
        this.countries = data;
      }
    );

  }

}
