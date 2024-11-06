import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';
import { AuthGuard } from './Auth/guards/auth.guard';  
import { GuestComponent } from './Guest/guest/guest.component';

export const routes: Routes = [
    { path: '', component: GuestComponent,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent,canActivate: [AuthGuard] },//canActivate: [AuthGuard]
    { path: 'home', component: TopnavigationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];
