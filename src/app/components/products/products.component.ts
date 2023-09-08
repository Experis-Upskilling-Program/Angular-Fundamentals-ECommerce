import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from '../../../data/fake-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string | undefined;   // 'Autoriza' que el componente pueda obtener datos del componente padre

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

  // Ciclos de vida del componente (En desorden, pero ellos se ejecutan en un orden particular)
  /** 
   * 1. OnChanges
   * 2. OnInit
   * 3. DoCheck
   * 4. ngAfterContentInit
   * 5. ngAfterContentChecked
   * 5. ngAfterViewInit
   * 6. ngAfterViewChecked
   * 7. ng
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.group( 'ngOnChanges' );
    console.log( changes[ 'value' ] );
    console.groupEnd();
  }
  ngOnDestroy(): void {
    console.group( 'ngOnDestroy' );
    console.log();
    console.groupEnd();
  }
  ngAfterViewChecked(): void {
    console.group( 'ngAfterViewChecked' );
    console.log();
    console.groupEnd();
  }
  ngAfterViewInit(): void {
    console.group( 'ngAfterViewInit' );
    console.log();
    console.groupEnd();
  }
  ngAfterContentInit(): void {
    console.group( 'ngAfterContentInit' );
    console.log();
    console.groupEnd();
  }
  ngDoCheck(): void {
    console.group( 'ngDoCheck' );
    console.log();
    console.groupEnd();
  }
  ngOnInit(): void {
    console.group( 'ngOnInit' );
    console.log();
    console.groupEnd();
  }
}