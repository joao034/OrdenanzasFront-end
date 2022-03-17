import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class CrudDepartamentosService {

  constructor(private http: HttpClient) { }

  obtenerDepartamentos(){
    return this.http.get(`${environment.API_URL}departamento.php`)
  }

  obtenerDepartamento(id: any):Observable<any>{
    return this.http.get(`${environment.API_URL}departamento.php?id=${id}`)
  }

  agregarDepartamento(departamento : Departamento): Observable<any>{
    return this.http.post(`${environment.API_URL}departamento.php?insertar=1`, departamento, {responseType: 'text'})
  }

  //ToDO
  editarDepartamento(departamento : Departamento) : Observable<any>{
    return this.http.post(`${environment.API_URL}departamento.php?actualizar=${departamento.id_materia}`, departamento)
  }

  eliminarDepartamento(id: any) : Observable<any>{
    return this.http.get(`${environment.API_URL}departamento.php?borrar=${id}`)
  }

}
