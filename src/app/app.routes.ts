import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';
import { AuthGuard } from './Auth/guards/auth.guard';  
import { GuestComponent } from './Guest/guest/guest.component';
import { HomeComponent } from './Home/home/home.component';


export const routes: Routes = [

    // GUEST
    { path: '', component: GuestComponent},
    { path: 'login', component: LoginComponent },//canActivate: [AuthGuard]


    // HAVE A TOKEN 
    // { path: 'home', component: TopnavigationComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
];
