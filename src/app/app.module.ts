import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';

import {RoutingModule} from './Routing.module';

import {ServicioService}from './Servicios/servicio.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule,RoutingModule,HttpClientModule ],

  declarations: [ AppComponent, HeroesComponent, HeroeComponent ],
   providers: [
    ServicioService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
