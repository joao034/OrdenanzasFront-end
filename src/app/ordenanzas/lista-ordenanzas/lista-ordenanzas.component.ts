import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';

@Component({
  selector: 'app-lista-ordenanzas',
  templateUrl: './lista-ordenanzas.component.html',
  styleUrls: ['./lista-ordenanzas.component.css'],
})
export class ListaOrdenanzasComponent implements OnInit {
  //atributos
  listaOrdenanzas: any
  temporalData:any[]
  length : number
  
  //Atributos paginator
  number !: number[]
  size = 0
  index = 0
  files = 0
  end = 0

  constructor(private crudOrdenanzas: CrudOrdenanzaService) {}

  ngOnInit(): void {
    this.cargarListaOrdenanzas();
  }

  //Metodo Paginador
  nextPage(number: number[]){
    this.size=number[1]
    this.index=number[0]
    this.files=this.size*this.index  
    this.end=this.files+this.size
    this.temporalData = this.listaOrdenanzas.slice(this.files,this.end)
  }
  
  cargarListaOrdenanzas() {
    this.crudOrdenanzas.obtenerOrdenanzas().subscribe((respuesta) => {
      this.listaOrdenanzas = respuesta;
      this.length = this.listaOrdenanzas.length
      this.temporalData = this.listaOrdenanzas
      this.temporalData = this.listaOrdenanzas.slice(0,10)
    });
  }

  deshabilitarOrdenanza(id: any) {
    if (window.confirm('¿Desea deshabilitar la ordenanza?')) {
      this.crudOrdenanzas.deshabilitarOrdenanza(id).subscribe((respuesta) => {
        alert("!Ordenanza Deshabilitada!")
      });
    }
  }

  
  
  
}
