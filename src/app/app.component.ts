import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavigationComponent } from './TopNavigation/topnavigation/topnavigation.component';  
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopnavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
}
