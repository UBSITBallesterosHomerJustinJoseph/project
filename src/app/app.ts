import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // ✅ include router features
  template: `
    <nav style="background: #007bff; padding: 10px; color: white;">
      <a routerLink="/home" routerLinkActive="active" style="margin-right: 15px; color: white; text-decoration: none;">
        Home
      </a>
      <a routerLink="/saved" routerLinkActive="active" style="color: white; text-decoration: none;">
        Saved Cities
      </a>
    </nav>

    <div style="padding: 20px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
