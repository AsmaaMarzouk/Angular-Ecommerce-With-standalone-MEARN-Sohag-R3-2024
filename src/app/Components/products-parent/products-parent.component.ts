import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductsListComponent,FormsModule],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {
  filterByName:string='';
}
