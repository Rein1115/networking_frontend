import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';
import { AuthGuard } from './Auth/guards/auth.guard';  

export const routes: Routes = [
    { path: 'login', component: LoginComponent,canActivate: [AuthGuard] },
    { path: 'home', component: TopnavigationComponent }

];
