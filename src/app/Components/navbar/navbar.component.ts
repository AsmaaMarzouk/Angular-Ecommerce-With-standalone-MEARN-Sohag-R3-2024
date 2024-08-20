import { Component } from '@angular/core';
import { ImgStyleDirective } from '../../Directives/img-style.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImgStyleDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
