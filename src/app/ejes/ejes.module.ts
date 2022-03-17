import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEjesComponent } from './page-ejes/page-ejes.component';
import { EjesRoutingModule } from './ejes-routing.module';
import { ListaEjesComponent } from './components/lista-ejes/lista-ejes.component';
import { AgregarEjeComponent } from './components/agregar-eje/agregar-eje.component';
import { SharedModule } from '../shared/shared.module';
import { EditarEjeComponent } from './components/editar-eje/editar-eje.component';



@NgModule({
  declarations: [
    PageEjesComponent,
    ListaEjesComponent,
    AgregarEjeComponent,
    EditarEjeComponent
  ],
  imports: [
    CommonModule,
    EjesRoutingModule,
    SharedModule
  ]
})
export class EjesModule { }
