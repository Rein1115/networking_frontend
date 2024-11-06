import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule here
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-topnavigation',
  standalone: true, 
  imports: [CommonModule,HttpClientModule],  // Import HttpClientModule here in the standalone component
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})
export class TopnavigationComponent {
  constructor(private http: HttpClient) {}  // Inject HttpClient
  navigationLinks: any[] = [];
    ngOnInit() {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        this.gettopnavigation(token);
      } else {
        console.error('No token found in localStorage');
      }
    }
  // Fetch top navigation data
  gettopnavigation(token: string) {
    if (token) {
      const desc_code = 'top_navigation';  // The query parameter value
      this.http.get('https://gold-wren-502857.hostingersite.com/public/api/accessmenu', {
        headers: { Authorization: `Bearer ${token}` },
        params: { desc_code }
      })
      .subscribe(
        (response: any) => { 
          var data = response;  
          this.navigationLinks = response; 
          console.log('Data received:', data); 
        },
        (error) => {
          console.error('Failed to fetch access menu:', error);
        }
      );
    } else {
      console.error('No auth token found. Please login again.');
    }
  }

  // Fetch sidebar token data
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
