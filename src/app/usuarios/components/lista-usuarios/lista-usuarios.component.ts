import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CrudUsuarioService } from 'src/app/services/crud-usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios : any
  administrador : boolean

  constructor(private crudUsuario : CrudUsuarioService) { 
    this.administrador =
      LoginComponent.usuario.id_permiso_per == 1 ? true : false;
  }

  ngOnInit(): void {
    this.cargarListaUsuarios()
  }

  //Carga todos los usuarios en la tabla 
  obtenerUsuarios(){
    this.crudUsuario.obtenerUsuarios().subscribe(
      respuesta => {
        this.listaUsuarios = respuesta
      }
    )
  }

  borrarUsuario(id : string, iControl:any){
    if(window.confirm("¿Desea eliminar el siguiente usuario?")){
      this.crudUsuario.eliminarUsuario(id).subscribe(
        (respuesta) => {
          if(respuesta['success'] === 1){
            this.listaUsuarios.splice(iControl, 1)
            alert('!Usuario eliminado!')
          }else{
            alert('Error al eliminar el usuario')
          }
        }
      )
    }
  }

  //carga los datos del usuario logueado
  obtenerUsuario(){
    this.crudUsuario.obtenerUsuario(LoginComponent.usuario.id_usuario).subscribe(
      (respuesta) => {
        this.listaUsuarios = respuesta
      }
    )
  }
  

  //Carga la tabla de usuarios dependiendo el permiso 
  cargarListaUsuarios(){
    //Si es administrador
    if(LoginComponent.usuario.id_permiso_per == 1){
      this.obtenerUsuarios()
    }

    //Si es editor
    if(LoginComponent.usuario.id_permiso_per == 2){
      this.obtenerUsuario()
    }
  }
}
