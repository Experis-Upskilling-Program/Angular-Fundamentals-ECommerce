import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { AdiosComponent } from './components/adios/adios.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    AdiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
