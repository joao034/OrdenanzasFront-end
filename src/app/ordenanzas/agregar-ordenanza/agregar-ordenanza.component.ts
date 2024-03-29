import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ordenanza } from 'src/app/models/ordenanza';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';
import { VigenciaService } from 'src/app/services/vigencia.service';

@Component({
  selector: 'app-agregar-ordenanza',
  templateUrl: './agregar-ordenanza.component.html',
  styleUrls: ['./agregar-ordenanza.component.css'],
})
export class AgregarOrdenanzaComponent implements OnInit {
  //atributos
  formOrdenanza: FormGroup;
  listaDepartamentos: any;
  listaVigencia: any;
  listaEjes: any;

  private ordenanza = new Ordenanza();

  //inyeccion de servicios
  constructor(
    private crudEje: CrudEjesService,
    private crudDepartamentos: CrudDepartamentosService,
    private crudVigencias: VigenciaService,
    private crudOrdenanzas: CrudOrdenanzaService,
    private router: Router
  ) {
    //creacion del formulario con los campos obligatorios y no obligatorios
    this.formOrdenanza = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      palabras: new FormControl(null),
      fecha_ordenanza: new FormControl(null, Validators.required),
      id_eje: new FormControl(null, Validators.required),
      id_materia: new FormControl(null, Validators.required),
      id_vigencia: new FormControl(null, Validators.required),
      archivo: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.cargarCombos();
  }

  //Se ejecuta al hacer click en el boton agregar del formulario
  subirOrdenanza() {
    this.inicializarOrdenanza();
    if (this.validarTamañoArchivo(this.ordenanza.archivo.tamaño)) {
      this.crudOrdenanzas
        .subirOrdenanza(this.ordenanza)
        .subscribe((respuesta) => {
          console.log(respuesta)
          if (respuesta["success"] === 1) {
            alert('Ordenanza agregada correctamente!');
          } else {
            alert('!Error al agregar la ordenanza!');
          }
          this.redireccion();
        });
    } else {
      alert('Archivo demasiado pesado, tamaño límite 60MB');
    }
  }

  //Setea todas los atributos de una ordenanza ingresadas en los inputs html
  inicializarOrdenanza() {
    this.ordenanza.nombre = this.formOrdenanza.controls['nombre'].value;
    this.ordenanza.palabras = this.formOrdenanza.controls['palabras'].value;
    this.ordenanza.fecha_ordenanza =
      this.formOrdenanza.controls['fecha_ordenanza'].value;
    this.ordenanza.id_eje = this.formOrdenanza.controls['id_eje'].value;
    this.ordenanza.id_materia = this.formOrdenanza.controls['id_materia'].value;
    this.ordenanza.id_vigencia =
      this.formOrdenanza.controls['id_vigencia'].value;
  }

  validarTamañoArchivo(tamaño: any): boolean {
    //maximo 60 MB
    const MAX_SIZE_BYTES = 60000000;
    return tamaño <= MAX_SIZE_BYTES ? true : false;
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

  redireccion() {
    this.router.navigate(['/ordenanzas']);
  }

  cancelar() {
    if (window.confirm('¿Desea cancelar la ordenanza?')) {
      this.limpiarCampos();
      this.redireccion();
    }
  }

  limpiarCampos() {
    this.formOrdenanza.setValue({
      nombre: '',
      palabras: '',
      fecha_ordenanza: '',
      id_eje: '',
      id_materia: '',
      id_vigencia: '',
      archivo: null,
    });
  }

  //Captura el archivo que se seleccione
  capturarArchivo(event: any): any {
    const files = event.target.files;
    const file = files[0];
    this.ordenanza.archivo.nombreArchivo = file.name;
    this.ordenanza.archivo.tamaño = file.size;
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent: any) {
    var binaryString = readerEvent.target.result;
    this.ordenanza.archivo.base64textString = btoa(binaryString);
  }
}
