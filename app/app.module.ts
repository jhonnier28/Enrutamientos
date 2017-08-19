import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import {ContactoComponent} from './contacto.component';
import {InicioComponent} from './inicio.component';
import {NosotrosComponent} from './nosotros.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, 
                  ContactoComponent, 
                  InicioComponent, 
                  NosotrosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
