import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesInicioComponent } from './pages-inicio/pages-inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [
    PagesInicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
