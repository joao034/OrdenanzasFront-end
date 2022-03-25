import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdenanzasComponent } from './page-ordenanzas/page-ordenanzas.component';
import { OrdenanzasRoutingModule } from './ordenanzas-routing.module';
import { AgregarOrdenanzaComponent } from './agregar-ordenanza/agregar-ordenanza.component';
import { SharedModule } from '../shared/shared.module';
import { ListaOrdenanzasComponent } from './lista-ordenanzas/lista-ordenanzas.component';
import { EditarOrdenanzaComponent } from './editar-ordenanza/editar-ordenanza.component';
import { PaginadorComponent } from './paginador/paginador.component';



@NgModule({
  declarations: [
    PageOrdenanzasComponent,
    AgregarOrdenanzaComponent,
    ListaOrdenanzasComponent,
    EditarOrdenanzaComponent,
    PaginadorComponent
  ],
  imports: [
    CommonModule,
    OrdenanzasRoutingModule,
    SharedModule
  ]
})
export class OrdenanzasModule { }
