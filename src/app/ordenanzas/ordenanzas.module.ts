import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOrdenanzasComponent } from './page-ordenanzas/page-ordenanzas.component';
import { OrdenanzasRoutingModule } from './ordenanzas-routing.module';



@NgModule({
  declarations: [
    PageOrdenanzasComponent
  ],
  imports: [
    CommonModule,
    OrdenanzasRoutingModule
  ]
})
export class OrdenanzasModule { }
