import { Component, OnInit } from '@angular/core';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';

@Component({
  selector: 'app-lista-ejes',
  templateUrl: './lista-ejes.component.html',
  styleUrls: ['./lista-ejes.component.css'],
})
export class ListaEjesComponent implements OnInit {
  listaEjes: any;

  constructor(private crudEje: CrudEjesService) {}

  ngOnInit(): void {
    this.obtenerEjes();
  }

  obtenerEjes() {
    this.crudEje.obtenerEjes().subscribe((respuesta) => {
      this.listaEjes = respuesta;
    });
  }

  borrar(id: any, iControl: any) {
    if (window.confirm('¿Desea eliminar el siguiente eje?')) {
      this.crudEje.eliminarEje(id).subscribe((respuesta) => {
        if (respuesta['success'] === 1) {
          this.listaEjes.splice(iControl, 1);
          alert('!Eje eliminado!');
        } else {
          alert('!Error al eliminar el eje!');
        }
      });
    }
  }
}
