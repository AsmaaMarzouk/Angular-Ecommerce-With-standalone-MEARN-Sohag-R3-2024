import { Component } from '@angular/core';
import { Iuser } from '../../../Models/iuser';
import { UserService } from '../../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss',
})
export class UserTemplateFormComponent {
  user:Iuser={} as Iuser;
  constructor(private userservice:UserService,private router:Router){}
  // addnewUser() {
  //   let u: Iuser = {
  //     firstName: 'Mahmoud',
  //     lastName: 'Ali',
  //     email: 'mah@gmail.com',
  //   };

  //   this.userservice.addUser(u).subscribe({
  //     next: (user)=>{
  //       console.log(user);
  //     },
  //     error: (err)=>{
  //       console.log(err);

  //     }
  //   })
  // }

  addNewUser(){
    this.userservice.addUser(this.user).subscribe({
          next: (user)=>{
            this.router.navigate(['/Products']);
            console.log(user);
          },
          error: (err)=>{
            console.log(err);

          }
        })
  }

}
