import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products: Array<Product> = [
    {
      id: 1,
      description: 'Iphone 11',
      price: 3500
    },
    {
      id: 2,
      description: 'Iphone 12',
      price: 4000
    },
    {
      id: 3,
      description: 'Iphone 13',
      price: 4500
    }
  ];

  constructor() { }
}
