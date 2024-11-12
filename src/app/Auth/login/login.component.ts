import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for template-driven forms
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Import HttpClientModule and HttpClient
import { Router } from '@angular/router';  // Import Router service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // Include FormsModule and HttpClientModule in the imports array
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  url = 'https://red-anteater-382469.hostingersite.com/public/api/';
  // Inject HttpClient to make API requests
  constructor(private http: HttpClient, private router: Router) {}


  // Function to handle form submission
  onSubmit() {
    if (this.email && this.password) {
      const loginData = { email: this.email, password: this.password };

 
      this.http.post(`${this.url}login`, loginData)
        .subscribe(
          (response) => {
            if ((response as any).success === true) {
              console.log((response as any).token);  

              this.router.navigate(['/home']);

              localStorage.setItem('token', (response as any).token);
            }else if ((response as any).success === false){
              console.log( (response as any).message); 
            }
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
    }
  }



  
  
}
