import { Component, OnInit } from '@angular/core';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';

@Component({
  selector: 'app-lista-ordenanzas',
  templateUrl: './lista-ordenanzas.component.html',
  styleUrls: ['./lista-ordenanzas.component.css'],
})
export class ListaOrdenanzasComponent implements OnInit {
  listaOrdenanzas: any;

  constructor(private crudOrdenanzas: CrudOrdenanzaService) {}

  ngOnInit(): void {
    this.cargarListaOrdenanzas();
  }

  cargarListaOrdenanzas() {
    this.crudOrdenanzas.obtenerOrdenanzas().subscribe((respuesta) => {
      this.listaOrdenanzas = respuesta;
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
