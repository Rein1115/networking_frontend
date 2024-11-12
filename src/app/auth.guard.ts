import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url = 'https://red-anteater-382469.hostingersite.com/public/api/';
  private token = localStorage.getItem('token');

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    if (!this.token) {
      this.router.navigate(['/login']);
      return new Observable<boolean>(observer => observer.next(false));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get(`${this.url}validate-token`, { headers }).pipe(
      map((response: any) => true),  // Token is valid
      catchError((error) => {
        this.router.navigate(['/login']);  // Redirect if token is invalid
        return new Observable<boolean>(observer => observer.next(false));
      })
    );
  }
}
