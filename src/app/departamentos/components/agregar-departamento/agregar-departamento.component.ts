import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';

@Component({
  selector: 'app-agregar-departamento',
  templateUrl: './agregar-departamento.component.html',
  styleUrls: ['./agregar-departamento.component.css']
})
export class AgregarDepartamentoComponent implements OnInit {

  formDepartamento : FormGroup

  constructor(private router : Router, private crudDepartamento: CrudDepartamentosService) { 
    this.formDepartamento = new FormGroup({
      nombre : new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  agregarDepartamento(){
    this.crudDepartamento.agregarDepartamento(this.formDepartamento.value).subscribe(
      (respuesta) => {
        alert('Departamento agregado correctamente!')
        //Redirecciona a la lista de departamentos
        this.cancelar()
      }
    )
  }

  cancelar(){
    this.router.navigate(['/departamentos'])
  }

}
