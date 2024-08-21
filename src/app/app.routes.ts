import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';

export const routes: Routes = [
  // default Path
  // {path:'',component:MainHomeComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: MainHomeComponent, title: 'Home page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products page',
  },
  {
    path: 'ProductsParent',
    component: ProductsParentComponent,
    title: 'Products parent page',
  },
  {path:'PrdDetails/:ProductID',component:ProductsDetailsComponent,title:"Product details page"},
  // not found page 404 //wildcard path
  { path: '**', component: NotFoundPageComponent, title: 'Not found page' },
];
