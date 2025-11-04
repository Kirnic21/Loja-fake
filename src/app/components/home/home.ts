import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
    <section class="home">
      <h2>Welcome to FakeStore</h2>
      <p>Your one-stop shop for demo products.</p>

      <a routerLink="/products" class="browse-btn">Browse Products</a>
    </section>
  `,
  styles: [`
    .home {
      text-align: center;
      margin-top: 4rem;
    }
    .browse-btn {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background: #1976d2;
      color: white;
      border-radius: 8px;
      text-decoration: none;
    }
    .browse-btn:hover {
      background: #0f5ca8;
    }
  `]
})
export class HomeComponent {}
