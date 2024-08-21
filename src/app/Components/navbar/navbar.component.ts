import { Component } from '@angular/core';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImgStyleDirective,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
