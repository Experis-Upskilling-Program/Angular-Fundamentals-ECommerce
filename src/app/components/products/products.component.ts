import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from '../../../data/fake-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() value: string | undefined;

  // Atributos de la clase
  product: Product = {
    id: 1,
    name: 'Mora',
    price: 10
  }
  products: Product[] = PRODUCTS;
  productSelected: Product | undefined;

  constructor() {
    console.log( this.productSelected );
  }

  // Metodos de la clase
  onSelected( product: Product ) {
    
    this.productSelected = product;
    console.log( this.productSelected );
  }

  // Ciclos de vida del componente
  ngOnChanges(changes: SimpleChanges): void {
    console.group( 'ngOnChanges' );
    console.log( changes[ 'value' ] );
    console.groupEnd();
  }
}