import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesAniosComponent } from './pages-anios/pages-anios.component';
import { AñosRoutingModule } from './años-routing.module';



@NgModule({
  declarations: [
    PagesAniosComponent
  ],
  imports: [
    CommonModule,
    AñosRoutingModule
  ]
})
export class AñosModule { }
