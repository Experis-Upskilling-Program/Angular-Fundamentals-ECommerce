import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from '../../../data/fake-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string | undefined;   // 'Autoriza' que el componente pueda obtener datos del componente padre
  @ViewChild( 'h2Element' ) titleComponent!: ElementRef;

  // Atributos de la clase
  product: Product = {
    id: 1,
    name: 'Mora',
    price: 10
  }
  products!: Product[];
  productSelected: Product | undefined;

  constructor() {
    // Inicializar propiedades de la clase
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
   * 6. ngAfterViewInit
   * 7. ngAfterViewChecked
   * 8. onDestroy
  */
  ngOnChanges(changes: SimpleChanges): void {

    // Verica los cambios de los valores de entrada y/o salida del componente
    console.group( 'ngOnChanges' );
    console.log( changes[ 'value' ] );
    console.log( this.titleComponent );
    console.groupEnd();
  }
  async ngOnInit() {
    // Generalmente se inicializan valores del Componente y/o se obtiene data desde 
    // endpoints para inicializar esos valores del Componente (APIs externas)
    this.products = PRODUCTS;

    // FetchAPI JavaScript, pero en Angular las peticions no se hacen con fetch, y tampoco se implentan dictectamente aca
    // const 
    //   response = await fetch( 'https://fakestoreapi.com/products' ),
    //   data = await response.json();

    console.group( 'ngOnInit' );
    // console.log( data );
    console.log( this.products );
    console.log( this.titleComponent );
    console.groupEnd();
  }
  ngOnDestroy(): void {
    console.group( 'ngOnDestroy' );
    console.log();
    console.groupEnd();
  }
  ngAfterViewChecked(): void {
    console.group( 'ngAfterViewChecked' );
    console.log( this.titleComponent );
    console.groupEnd();
  }
  ngAfterViewInit(): void {

    console.group( 'ngAfterViewInit' );
    console.log( this.titleComponent );
    console.groupEnd();
  }
  ngAfterContentInit(): void {
    console.group( 'ngAfterContentInit' );
    console.log();
    console.groupEnd();
  }
  ngDoCheck(): void {

    console.group( 'ngDoCheck' );
    console.log( this.titleComponent );
    console.groupEnd();
  }

}