import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect root to login
    { path: 'login', component: LoginComponent }           // Login route
  ];
  
