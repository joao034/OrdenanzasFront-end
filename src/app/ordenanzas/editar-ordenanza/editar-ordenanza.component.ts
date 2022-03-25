import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';
import { CrudOrdenanzaService } from 'src/app/services/crud-ordenanza.service';
import { VigenciaService } from 'src/app/services/vigencia.service';

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

  idOrdenanza : any

  constructor(private activatedRoute : ActivatedRoute,
              private crudOrdenanzas : CrudOrdenanzaService,
              public formBuilder : FormBuilder,
              private crudEje : CrudEjesService,
              private crudDepartamentos : CrudDepartamentosService,
              private crudVigencias : VigenciaService) 
  {
    this.crearFormulario() 
    this.idOrdenanza = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudOrdenanzas.obtenerOrdenanza(this.idOrdenanza).subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.formOrdenanza.setValue({
          nombre : respuesta[0]['nombre'],
          fecha_ordenanza : respuesta[0]['fecha_ordenanza'],
          id_eje : respuesta[0]['id_eje'],
          id_materia : respuesta[0]['id_materia'],
          id_vigencia : respuesta[0]['id_vigencia'],
          archivo : respuesta[0]['archivo']
        })
      }
    )

  }

  crearFormulario(){
    this.formOrdenanza = this.formBuilder.group({
      nombre : [''],
      fecha_ordenanza : [''],
      id_eje : [''],
      id_materia : [''],
      id_vigencia : [''],
      archivo : ['']
    }
    )
  }

  ngOnInit(): void {
    this.cargarCombos()
  }

  editarOrdenanza(){

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

  capturarArchivo(event:any){}
  cancelar(){}

}
