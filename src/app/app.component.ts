import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayinCardComponent } from './components/playin-card/playin-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayinCardComponent],
  templateUrl: 'app.component.html', 
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'playing-cards';
}
