import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from '../../../data/fake-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // Implementamos
  product: Product = {
    id: 1,
    name: 'Mora',
    price: 10
  }
  products: Product[] = PRODUCTS;
}