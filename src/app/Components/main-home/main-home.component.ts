import { Component } from '@angular/core';
import { TrackInfo } from '../../Models/track-info';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {
// properties , methods
// protected userName:string='Ali';
// userID:number=30;
// sayHello(){
//   return `Hello ${this.userName}`
// }


// use class model
track:TrackInfo=new TrackInfo("MEARN Track",44,["JS","node js","Angular"],"https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png");

}
