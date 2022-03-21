import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
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
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
