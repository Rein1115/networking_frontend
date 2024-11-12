import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';
// import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    NgbModule,
    AppComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'first-angular';
  url = 'https://red-anteater-382469.hostingersite.com/public/api/';
  constructor(private http: HttpClient) {}

  navigationLinks: any[] = [];

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.gettopnavigation(token);
    } else {
      console.error('No token found in localStorage');
    }
  }

  // Fetch top navigation data
  gettopnavigation(token: string) {
    if (token) {
      const desc_code = 'top_navigation';
      this.http.get(`${this.url}accessmenu`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { desc_code }
      })
      .subscribe(
        (response: any) => { 
          this.navigationLinks = response;
          console.log('Data received:', response); 
        },
        (error) => {
          console.error('Failed to fetch access menu:', error);
        }
      );
    } else {
      console.error('No auth token found. Please login again.');
    }
  }

  sidetoken(token: string) {
    if (token) {
      const desc_code = 'sidebar_token';

      this.http.get(`${this.url}accessmenu`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { desc_code }
      })
      .subscribe(
        (response) => {
          console.log('Sidebar menu data:', response);
        },
        (error) => {
          console.error('Failed to fetch sidebar menu:', error);
        }
      );
    } else {
      console.error('No auth token found. Please login again.');
    }
  }
}
