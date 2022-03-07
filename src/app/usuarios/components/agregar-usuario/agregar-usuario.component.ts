import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  formUsuario : FormGroup

  constructor(public formulario : FormBuilder) { 
    this.formUsuario = formulario.group({
      id_usuario : [''],
      clave : [''],
      nombre : [''],
      correo: [''],
      id_permiso : [''],
      id_departamento:['']
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario():any{
    console.log('Me presionaste')
    console.log(this.formUsuario.value)
  }

}
