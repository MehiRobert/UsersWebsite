import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

import {HttpClientModule} from '@angular/common/http';

import {UsersService} from '../UserService/users.service';
import { HomeComponent } from '../home/home.component';
import { DataComponent } from '../data/data.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import {AuthGuard} from '../AuthGuard/auth.guard';
import {FormsModule} from '@angular/forms';
import { BasicUserComponent } from '../basic-user/basic-user.component';
import { RegionalUserComponent } from '../regional-user/regional-user.component';
import { InsertBasicUserComponent } from '../insert-basic-user/insert-basic-user.component';
import { InsertRegionalUserComponent } from '../insert-regional-user/insert-regional-user.component';
import { LogOutComponent } from '../log-out/log-out.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    BasicUserComponent,
    RegionalUserComponent,
    InsertBasicUserComponent,
    InsertRegionalUserComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'insertBasicUser',
            component: InsertBasicUserComponent,
          },
          {
            path: 'insertRegionalUser',
            component: InsertRegionalUserComponent
          }

        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'logout',
        component: LogOutComponent
      },
      {
        path: 'BasicUser',
        component: BasicUserComponent,
        children: [
          {
            path: '**',
            component: BasicUserComponent
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'RegionManager',
        component: RegionalUserComponent,
        children: [
          {
            path: '**',
            component: RegionalUserComponent
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ]),
    FormsModule,
  ],
  providers: [UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
