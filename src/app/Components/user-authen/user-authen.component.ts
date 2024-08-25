import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  standalone: true,
  imports: [],
  templateUrl: './user-authen.component.html',
  styleUrl: './user-authen.component.scss',
})
export class UserAuthenComponent implements OnInit {
  userInComponent: boolean = true;
  constructor(private user: UserAuthenService) {}
  ngOnInit(): void {
    this.userInComponent = this.user.isUserLogged;
  }
  LoginFunc() {
    this.user.login('asd@gmail', '111');
    this.userInComponent = this.user.isUserLogged;//true

  }
  LogoutFunc() {
    this.user.logout();
    this.userInComponent = this.user.isUserLogged;//false

  }
}
