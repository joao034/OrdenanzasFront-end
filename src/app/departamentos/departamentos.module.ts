import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDepartamentosComponent } from './page-departamentos/page-departamentos.component';
import { DepartamentosRoutingModule } from './departamentos-routing.module';



@NgModule({
  declarations: [
    PageDepartamentosComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }
