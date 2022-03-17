import { Component, OnInit } from '@angular/core';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';

@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css'],
})
export class ListaDepartamentosComponent implements OnInit {
  listaDepartamentos: any;

  constructor(private crudDepartamento: CrudDepartamentosService) {}

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

  obtenerDepartamentos() {
    this.crudDepartamento.obtenerDepartamentos().subscribe((respuesta) => {
      this.listaDepartamentos = respuesta;
    });
  }

  borrar(id: any, iControl: any) {
    if (window.confirm('Desea eliminar el siguiente departamento?')) {
      this.crudDepartamento.eliminarDepartamento(id).subscribe((respuesta) => {
        this.listaDepartamentos.splice(iControl, 1);
      });
    }
  }
}
