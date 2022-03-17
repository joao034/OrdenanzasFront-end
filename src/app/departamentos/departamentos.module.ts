import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDepartamentosComponent } from './page-departamentos/page-departamentos.component';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { AgregarDepartamentoComponent } from './components/agregar-departamento/agregar-departamento.component';
import { ListaDepartamentosComponent } from './components/lista-departamentos/lista-departamentos.component';
import { SharedModule } from '../shared/shared.module';
import { EditarDepartamentoComponent } from './components/editar-departamento/editar-departamento.component';

@NgModule({
  declarations: [
    PageDepartamentosComponent,
    AgregarDepartamentoComponent,
    ListaDepartamentosComponent,
    EditarDepartamentoComponent,
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    SharedModule
  ]
})
export class DepartamentosModule { }
