import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';
import { CrudUsuarioService } from 'src/app/services/crud-usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  formUsuario : FormGroup
  listaDepartamentos : any
  listaPerfilesUsuario : any


  constructor(private crudUsuario: CrudUsuarioService,
              private crudDepartamento : CrudDepartamentosService, 
              private router : Router) 
  { 
    this.formUsuario = new FormGroup({
      id_usuario : new FormControl(null, Validators.required),
      clave : new FormControl(null, Validators.required),
      nombre : new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      id_permiso_per : new FormControl(null, Validators.required),
      id_departamento_per : new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.cargarComboDepartamentos()
  }

  agregarUsuario():any{
    this.crudUsuario.agregarUsuario(this.formUsuario.value).subscribe(
      (datos) => {
        if(datos['success'] === 1){
          alert('!Usuario insertado correctamente!')
        }else{
          alert('!Error al insertar el usuario!')
        }
        //Redirecciona a la lista de usuario una vez insertado el nuevo registro
        this.cancelar()
      }
    )
  }

  cancelar(){
    this.router.navigate(['/usuarios'])
  }

  cargarComboDepartamentos(){
    this.crudDepartamento.obtenerDepartamentos().subscribe(
      respuesta => {
        //console.log(respuesta)
        this.listaDepartamentos = respuesta
      }
    )
  }


}
