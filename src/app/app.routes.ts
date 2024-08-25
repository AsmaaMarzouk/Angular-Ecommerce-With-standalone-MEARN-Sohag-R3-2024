import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ObsAndOperatorsComponent } from './Components/obs-and-operators/obs-and-operators.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { UserAuthenComponent } from './Components/user-authen/user-authen.component';
import { userGuard } from './Guards/user.guard';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';

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
    canActivate:[userGuard]
  },
  {path:'PrdDetails/:ProductID',component:ProductsDetailsComponent,title:"Product details page"},
  {
    path: 'ObsAndOperators',
    component: ObsAndOperatorsComponent,
    title: 'Oserverable page',
  },
  {
    path: 'UserTemplate',
    component: UserTemplateFormComponent,
    title: 'User template page',
  },
  {
    path: 'UserLogin',
    component: UserAuthenComponent,
    title: 'User Login',
  },
  {
    path: 'UserLogout',
    component: UserAuthenComponent,
    title: 'User Logout',
  },
  {
    path: 'UserReactive',
    component: UserReactiveFormComponent,
    title: 'User Reactive',
  },
  // {path:"addProducts",component: EditOrAddProductsComponent}
  // {path:"editProducts/:ProductID",component: EditOrAddProductsComponent}
  // not found page 404 //wildcard path
  { path: '**', component: NotFoundPageComponent, title: 'Not found page' },
];
