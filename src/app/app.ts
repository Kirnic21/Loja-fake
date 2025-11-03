import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Shop } from './components/shop/shop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Shop],
  templateUrl: `./app.html`,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'Hello';
}
