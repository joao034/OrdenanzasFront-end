import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-ordenanza',
  templateUrl: './editar-ordenanza.component.html',
  styleUrls: ['./editar-ordenanza.component.css']
})
export class EditarOrdenanzaComponent implements OnInit {

  formOrdenanza : FormGroup
  listaEjes : any
  listaDepartamentos : any
  listaVigencia : any

  constructor() { }

  ngOnInit(): void {
  }

  editarOrdenanza(){

  }

  capturarArchivo(event:any){}
  cancelar(){}

}
