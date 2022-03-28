import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';



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
    MatPaginatorModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ], 
  exports:[
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
