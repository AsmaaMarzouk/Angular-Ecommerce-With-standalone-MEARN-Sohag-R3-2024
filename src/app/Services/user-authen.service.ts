import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {

  userLog:BehaviorSubject<boolean>;

  constructor() {
    this.userLog=new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(email:string,password:string) {
    // token  => user
    localStorage.setItem("usertoken","234545667");

    this.userLog.next(true);

  }
  logout(){
    localStorage.removeItem("usertoken");
    this.userLog.next(false);
  }

  get isUserLogged():boolean {
    // usertoken => check in local storage

    return localStorage.getItem('usertoken')?true:false;
  }

  getUserStatus(){
    return this.userLog.asObservable();
  }
}
