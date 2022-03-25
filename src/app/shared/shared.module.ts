import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    MatPaginatorModule
  ], 
  exports:[
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
