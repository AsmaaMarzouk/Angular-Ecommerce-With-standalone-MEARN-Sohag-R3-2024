import { Component, OnInit } from '@angular/core';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { RouterModule } from '@angular/router';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImgStyleDirective,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user:boolean=true;
constructor(private userAuth:UserAuthenService){
  // this.user=this.userAuth.isUserLogged;
  // console.log(this.user);

}
  ngOnInit(): void {
    this.userAuth.getUserStatus().subscribe({
      next:(u)=>{
        this.user=u;
        console.log(this.user);


      },error:(e)=>{
        console.log(e);

      }
    })
  }

}
