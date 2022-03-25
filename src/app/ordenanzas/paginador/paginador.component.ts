import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() length!: number;
  @Output() onNextPage:EventEmitter<number[]> = new EventEmitter<number[]>()

  constructor() { }

  ngOnInit(): void {
  }

  OnPageChange(event: PageEvent){
    this.onNextPage.emit([event.pageIndex, event.pageSize])
  } 

}
