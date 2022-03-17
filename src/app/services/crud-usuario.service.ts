import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudUsuarioService {

  constructor(private http : HttpClient) { }

  agregarUsuario(usuario: Usuario) : Observable<any>{
    return this.http.post(`${environment.API_URL}usuario.php?insertar=1`, usuario, {responseType: 'text'})
  }

  obtenerUsuario(id: any): Observable<any>{
    return this.http.get(`${environment.API_URL}usuario.php?id=${id}`)
  }
 
  obtenerUsuarios(){
    return this.http.get(`${environment.API_URL}usuario.php`)
  }

  eliminarUsuario(id: string) : Observable<any>{
    return this.http.get(`${environment.API_URL}usuario.php?borrar=${id}`, {responseType: 'text'})
  }

  editarUsuario(usuario : Partial<Usuario>): Observable<any>{
    return this.http.post(`${environment.API_URL}usuario.php?actualizar=${usuario.id_usuario}`, usuario, {responseType: 'text'})
  }

  editarClave(datosUsuario : any, id: any){
    return this.http.post(`${environment.API_URL}usuario.php?actualizarClave=${id}`, datosUsuario)
  }

}
