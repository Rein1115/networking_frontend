import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopnavigationComponent,
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'first-angular';

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
      this.http.get('https://gold-wren-502857.hostingersite.com/public/api/accessmenu', {
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

      this.http.get('https://gold-wren-502857.hostingersite.com/public/api/accessmenu', {
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
