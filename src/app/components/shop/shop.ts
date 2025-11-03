import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../../services/product';
import { Shopcard } from '../shopcard/shopcard';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, Shopcard],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class Shop {
  private productService = inject(ProductService);
  products: Observable<Product[]> = this.productService.getAllProducts();
}
