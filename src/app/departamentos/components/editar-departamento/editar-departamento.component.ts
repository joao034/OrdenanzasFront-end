import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  formDepartamento : FormGroup
  idDepartamento : any

  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute,
    private crudDepartamento : CrudDepartamentosService,
    public formBuilder : FormBuilder) {
    this.idDepartamento = this.activatedRoute.snapshot.paramMap.get('id')
    
    //Creo parametros Formulario
    this.formDepartamento = this.formBuilder.group({
      id_materia : [''],
      nombre : ['']
    })

    //Asigno valores a los input
    this.crudDepartamento.obtenerDepartamento(this.idDepartamento).subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.formDepartamento.setValue({
          id_materia : respuesta['id_materia'],
          nombre : respuesta['nombre']
        })
      }
    )
  }

  ngOnInit(): void {
  }

  editarDepartamento(){
    this.crudDepartamento.editarDepartamento(this.formDepartamento.value).subscribe(
      (respuesta) => {
        if(respuesta['success'] === 1){
          alert('!Departamento actualizado correctamente!')
        }else{
          alert('!Error al actualizar el departamento!')
        }
        console.log(respuesta)
        this.cancelar()
      }
    )
  }

  cancelar(){
    this.router.navigate(['/departamentos'])
  }

}
