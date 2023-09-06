import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // Encapsular atributos de clase usando accesibilidad
  title: String = 'Lista de productos';
  // public title: String = 'Lista de productos';
  // private title: String = 'Lista de productos';
  // protected title: String = 'Lista de productos';

  // Tipando variables usando TypeScript
  value: number;                // Inicialice valor en el contructor
  value1: number | undefined;   // Soporta dos tipos, inicialmente undefined, por eso no truena.
  value2!: number;              // Solo soporta un tipo. Yo controlo cuando deja de ser indefinida

  // String[]       -> JavaScript/TypeScript
  // Array<String>  -> Java
  fruits: any[] = [ 'Mango', 'Mandarina', 'Melon', 236, true, null, undefined ];
  frutas: String[] = [ 'Mango', 'Mandarina', 'Melon' ];
  verduras: Array<String> = [ 'Cebolla', 'Tomate' ];
  verdureria: ( String | Number ) [] = [ 'Mango', 10, 'Mandarina', 9, 'Melon', 15 ];

  constructor() {
    this.value = 10;
  }
}
