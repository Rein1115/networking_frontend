import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for template-driven forms
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Import HttpClientModule and HttpClient

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

  // Inject HttpClient to make API requests
  constructor(private http: HttpClient) {}

  // Function to handle form submission
  onSubmit() {
    if (this.email && this.password) {
      const loginData = { email: this.email, password: this.password };

 
      this.http.post('https://gold-wren-502857.hostingersite.com/public/api/login', loginData)
        .subscribe(
          (response) => {
            if ((response as any).success === true) {
              // var token = (response as any).token
              // this.gettopnavigation(token);
              // this.sidetoken(token);
              console.log((response as any).token);  
              // localStorage.setItem('token', (response as any).token);
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