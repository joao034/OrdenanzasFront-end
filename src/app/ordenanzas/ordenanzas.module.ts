import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdenanzasComponent } from './page-ordenanzas/page-ordenanzas.component';
import { OrdenanzasRoutingModule } from './ordenanzas-routing.module';
import { AgregarOrdenanzaComponent } from './agregar-ordenanza/agregar-ordenanza.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageOrdenanzasComponent,
    AgregarOrdenanzaComponent
  ],
  imports: [
    CommonModule,
    OrdenanzasRoutingModule,
    SharedModule
  ]
})
export class OrdenanzasModule { }
