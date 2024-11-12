import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  url = 'https://red-anteater-382469.hostingersite.com/public/api/';
  token = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {}

  getRoles() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    this.http.get(`${this.url}role`, { headers })
      .subscribe(
        (response) => {
          console.log('Roles:', response);
        },
        (error) => {
          console.error('Error fetching roles:', error);
          // Optionally, handle error, such as navigating to login if unauthorized
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      );
  }
}
