import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ordenanza } from '../models/ordenanza';

@Injectable({
  providedIn: 'root'
})
export class CrudOrdenanzaService {

  constructor(private http : HttpClient) { }

  subirOrdenanza( ordenanza : Ordenanza ): Observable<any>{
    return this.http.post(`${environment.API_URL}ordenanza.php?insertar=1`, ordenanza, {responseType: 'text'});
  }

  obtenerOrdenanzas(){
    return this.http.get(`${environment.API_URL}ordenanza.php`)
  }

  obtenerOrdenanza(id:any) : Observable<any>{
    return this.http.get(`${environment.API_URL}ordenanza.php?id=${id}`)
  }

  deshabilitarOrdenanza(id:any){
    return this.http.get(`${environment.API_URL}ordenanza.php?deshabilitar=${id}`)
  }

  editarOrdenanza(){

  }

  buscarOrdenanza(){}

}
