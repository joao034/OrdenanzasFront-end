import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    TableComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ], 
  exports:[
    TableComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
