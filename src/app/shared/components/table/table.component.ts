import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { IMetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data:any

  @Input() metaDataColumns!:IMetaDataColumn[]

  //Agrega nuevas definiciones de columna
  @ContentChildren(MatColumnDef, {descendants:true})
  //Agregar elementos desde un compoenente externo
  ColumnsDef !: QueryList<MatColumnDef>
  //Obtengo la referencia del MatTable al cual se puede agregar las columnas
  @ViewChild(MatTable, {static:true}) table!: MatTable<any>

  listFields  : any = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['metaDataColumns'])
    {
      this.listFields = this.metaDataColumns.map((x) => x.campo)
    }
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    if(!this.ColumnsDef){
      return
    }
      this.ColumnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name)
      this.table?.addColumnDef(columnDef)
    })
  }

}
