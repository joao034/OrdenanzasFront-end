import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CrudDepartamentosService } from 'src/app/services/crud-departamentos.service';
import { CrudUsuarioService } from 'src/app/services/crud-usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  formUsuario: FormGroup;
  idUsuario: any;
  listaDepartamentos: any;
  administrador: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private crudUsuario: CrudUsuarioService,
    public formBuilder: FormBuilder,
    private router: Router,
    private crudDepartamento: CrudDepartamentosService
  ) {
    
    this.administrador =
      LoginComponent.usuario.id_permiso_per == 1 ? true : false;

    //Asignando los campos que va a tener el formulario
    this.crearFormularioEditar(LoginComponent.usuario.id_permiso_per);

    this.idUsuario = this.activedRoute.snapshot.paramMap.get('id');

    this.crudUsuario.obtenerUsuario(this.idUsuario).subscribe((respuesta) => {
      //Llena los campos del html
      console.log(respuesta);

      //Si es administrador
      if (LoginComponent.usuario.id_permiso_per == 1) {
        this.formUsuario.setValue({
          id_usuario: respuesta[0]['id_usuario'],
          clave: respuesta[0]['clave'],
          nombre: respuesta[0]['nombre'],
          id_departamento_per: respuesta[0]['id_departamento_per'],
          id_permiso_per: respuesta[0]['id_permiso_per'],
          correo: respuesta[0]['correo'],
        });
      }

      //Si es editor
      if (LoginComponent.usuario.id_permiso_per == 2) {
        this.formUsuario.setValue({
          id_usuario: respuesta[0]['id_usuario'],
          clave: respuesta[0]['clave'],
        });
      }
    });
  }

  ngOnInit(): void {
    //Carga el combobox de departamentos al inicializar la aplicacion
    this.cargarComboDepartamentos();
  }

  cancelar() {
    this.router.navigate(['/usuarios']);
  }

  cargarComboDepartamentos() {
    this.crudDepartamento.obtenerDepartamentos().subscribe((respuesta) => {
      this.listaDepartamentos = respuesta;
    });
  }

  actualizarUsuario() {
    this.crudUsuario
      .editarUsuario(this.formUsuario.value)
      .subscribe((respuesta) => {
        console.log(respuesta)
        alert('Datos de usuario actualizados correctamente!');
        this.cancelar();
      });
  }

  actualizarClave(){
    this.crudUsuario.editarClave(this.formUsuario.value, this.idUsuario).subscribe(
      (respuesta) => {
        alert('Contraseña actualizada!')
        this.cancelar()
      }
    )
  }

  crearFormularioEditar(idPermiso: any) {
    //Si es administrador
    if (idPermiso == 1) {
      //Asignando los campos que va a tener el formulario
      this.formUsuario = this.formBuilder.group({
        id_usuario: [''],
        clave: [''],
        nombre: [''],
        id_departamento_per: [''],
        id_permiso_per: [''],
        correo: [''],
      });
    }
    //Si es editor
    if (idPermiso == 2) {
      //Asignando los campos que va a tener el formulario
      this.formUsuario = this.formBuilder.group({
        id_usuario: [''],
        clave: [''],
      });
    }
  }

  submitForm(){
    if(this.administrador){
      this.actualizarUsuario()
    }else{
      this.actualizarClave()
    }
  }
}
