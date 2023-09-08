import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor() {
    console.log( this.title );
  }

  onChangeTitle() {
    this.title = 'Hola chicas!'
  }
}
