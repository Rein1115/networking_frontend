import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
// import { AuthGuard } from './Auth/guards/auth.guard';
import { AuthGuard } from './auth.guard';
import { GuestComponent } from './Guest/guest/guest.component';
import { HomeComponent } from './Home/home/home.component';
import { RolesComponent } from './System/roles/roles.component';

export const routes: Routes = [
  { path: '', component: GuestComponent },
  { path: 'login', component: LoginComponent },

  // Protect these routes with AuthGuard
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'role', component: RolesComponent, canActivate: [AuthGuard] }
];
