import { Component,signal,inject } from '@angular/core';
import { Greeting } from '../greeting/greeting';
import { Product, ProductService } from '../../services/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [Greeting,CommonModule],
  standalone:true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartCount = 3; 

}