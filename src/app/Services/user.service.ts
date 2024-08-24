import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpheader = {};

  userURl: string = `${environment.baseURL}/Users`;
  constructor(private httpclient: HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  addUser(newuser: Iuser): Observable<Iuser> {
    return this.httpclient.post<Iuser>(
      `${this.userURl}`,
      newuser,
      this.httpheader
    );
  }
}
