import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordenanza } from 'src/app/models/ordenanza';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';
import { VigenciaService } from 'src/app/services/vigencia.service';

@Component({
  selector: 'app-editar-ordenanza',
  templateUrl: './editar-ordenanza.component.html',
  styleUrls: ['./editar-ordenanza.component.css'],
})
export class EditarOrdenanzaComponent implements OnInit {
  formOrdenanza: FormGroup;
  listaEjes: any;
  listaDepartamentos: any;
  listaVigencia: any;

  idOrdenanza: any;

  //objeto Ordenanza
  ordenanza = new Ordenanza();

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudOrdenanzas: CrudOrdenanzaService,
    public formBuilder: FormBuilder,
    private crudEje: CrudEjesService,
    private crudDepartamentos: CrudDepartamentosService,
    private crudVigencias: VigenciaService,
    private router: Router
  ) {
    this.crearFormulario();
    this.idOrdenanza = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudOrdenanzas
      .obtenerOrdenanza(this.idOrdenanza)
      .subscribe((respuesta) => {
        //inicializar el objeto ordenanza con lo que traiga el json
        this.ordenanza.id_ordenanza = respuesta[0]['id_ordenanza'];
        this.ordenanza.nombre = respuesta[0]['nombre'];
        this.ordenanza.fecha_ordenanza = respuesta[0]['fecha_ordenanza'];
        this.ordenanza.id_eje = respuesta[0]['id_eje'];
        this.ordenanza.id_materia = respuesta[0]['id_materia'];
        this.ordenanza.id_vigencia = respuesta[0]['id_vigencia'];

        //asignar los valores al formulario en html
        this.formOrdenanza.setValue({
          id_ordenanza: this.ordenanza.id_ordenanza,
          nombre: this.ordenanza.nombre,
          fecha_ordenanza: formatDate(this.ordenanza.fecha_ordenanza,'yyyy-MM-dd','en'),
          id_eje: this.ordenanza.id_eje,
          id_materia: this.ordenanza.id_materia,
          id_vigencia: this.ordenanza.id_vigencia,
          //archivo : respuesta[0]['archivo']
        });
      });
  }

  crearFormulario() {
    this.formOrdenanza = this.formBuilder.group({
      id_ordenanza: [''],
      nombre: [''],
      fecha_ordenanza: [''],
      id_eje: [''],
      id_materia: [''],
      id_vigencia: [''],
      //archivo : ['']
    });
  }

  ngOnInit(): void {
    this.cargarCombos();
  }

  editarOrdenanza() {
    this.crudOrdenanzas
      .editarOrdenanza(this.idOrdenanza, this.formOrdenanza.value)
      .subscribe((respuesta) => {
        if (respuesta['success'] == 1) {
          console.log(respuesta);
          console.log(this.ordenanza);
          alert('!Ordenanza editada correctamente!');
        } else {
          alert('!Error al editar la ordenanza!');
        }
        this.cancelar();
      });
  }

  cargarCombos() {
    this.cargaComboEjes();
    this.cargaComboDepartamentos();
    this.cargaComboVigencia();
  }

  cargaComboEjes() {
    this.crudEje.obtenerEjes().subscribe((respuesta) => {
      this.listaEjes = respuesta;
    });
  }

  cargaComboDepartamentos() {
    this.crudDepartamentos.obtenerDepartamentos().subscribe((respuesta) => {
      this.listaDepartamentos = respuesta;
    });
  }

  cargaComboVigencia() {
    this.crudVigencias.obtenerTipoVigencias().subscribe((respuesta) => {
      this.listaVigencia = respuesta;
    });
  }

  capturarArchivo(event: any) {}

  cancelar() {
    this.router.navigate(['/ordenanzas']);
  }
}
