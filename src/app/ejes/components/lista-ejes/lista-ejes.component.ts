import { Component, OnInit } from '@angular/core';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';

@Component({
  selector: 'app-lista-ejes',
  templateUrl: './lista-ejes.component.html',
  styleUrls: ['./lista-ejes.component.css']
})
export class ListaEjesComponent implements OnInit {

  listaEjes : any

  constructor(private crudEje : CrudEjesService) { }

  ngOnInit(): void {
    this.obtenerEjes()
  }

  obtenerEjes(){
    this.crudEje.obtenerEjes().subscribe(
      respuesta => {
        this.listaEjes = respuesta
    })
  }
  
  borrar(id : any, iControl : any){
    if(window.confirm('Desea eliminar el registro?')){
      this.crudEje.eliminarEje(id).subscribe(
        respuesta => {
          this.listaEjes.splice(iControl, 1)
        }
      )
    }
  }

  
}
