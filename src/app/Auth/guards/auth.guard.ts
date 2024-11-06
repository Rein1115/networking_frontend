// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if there is a token in localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // If token exists, redirect to home page
      this.router.navigate(['/home']);
      return false;  // Prevent access to the login route
    }

    // If no token, allow access to the route (login page)
    return true;
  }
}