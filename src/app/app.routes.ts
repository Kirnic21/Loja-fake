import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Products } from './components/products/products';
import { LoginComponent } from './components/login/login';
import { authGuard } from './custom-name-guard';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'products',component:Products,canActivate:[authGuard]},
    { path: 'login', component: LoginComponent }
];
