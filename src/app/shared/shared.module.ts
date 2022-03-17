import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TableComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ], 
  exports:[
    TableComponent,
    ContainerComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
