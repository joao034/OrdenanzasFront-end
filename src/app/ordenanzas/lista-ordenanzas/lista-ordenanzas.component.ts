import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';

@Component({
  selector: 'app-lista-ordenanzas',
  templateUrl: './lista-ordenanzas.component.html',
  styleUrls: ['./lista-ordenanzas.component.css'],
})
export class ListaOrdenanzasComponent implements OnInit {
  //atributos
  administrador : boolean
  listaOrdenanzas: any
  temporalData:any[]
  length : number
  //grupo : FormGroup

  parametroBusqueda : any
  
  //Atributos paginator
  number !: number[]
  size = 0
  index = 0
  files = 0
  end = 0

  constructor(private crudOrdenanzas: CrudOrdenanzaService) {
    this.administrador =
      LoginComponent.usuario.id_permiso_per == 1 ? true : false;
  }

  ngOnInit(): void {
    this.cargarListaOrdenanzas();
    //this.buscarOrdenanza()
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
        this.cargarListaOrdenanzas()
      });
    }
  }


  /*buscarOrdenanza(){
    if(this.parametroBusqueda == ""){
      this.ngOnInit()
    }else{
      this.temporalData = this.listaOrdenanzas.filter(
        (res : any) => {
          return res.parametroBusqueda.toLocaleLowerCase().match(
            this.parametroBusqueda.toLocaleLowerCase()
          )
        },
        console.log(this.temporalData)
      )
    }
  }*/
}
