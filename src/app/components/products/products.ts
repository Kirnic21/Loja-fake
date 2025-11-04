import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Shop } from '../shop/shop';

@Component({
  selector: 'app-products',
  standalone: true,                // required
  imports: [CommonModule, Header, Shop],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
