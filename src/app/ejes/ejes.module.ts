import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEjesComponent } from './page-ejes/page-ejes.component';
import { EjesRoutingModule } from './ejes-routing.module';



@NgModule({
  declarations: [
    PageEjesComponent
  ],
  imports: [
    CommonModule,
    EjesRoutingModule
  ]
})
export class EjesModule { }
