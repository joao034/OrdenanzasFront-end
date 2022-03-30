import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eje } from '../models/eje';

@Injectable({
  providedIn: 'root'
})
export class CrudEjesService {

  constructor(private http : HttpClient) { }

  obtenerEjes(){
    return this.http.get(`${environment.API_URL}eje.php`)
  }

  obtenerEje(id: any): Observable<any>{
    return this.http.get(`${environment.API_URL}eje.php?id=${id}`)
  }

  agregarEje(eje : Eje): Observable<any>{
    return this.http.post(`${environment.API_URL}eje.php?insertar=1`, eje)
  }

  //ToDO
  editarEje(eje : Eje) : Observable<any>{
    return this.http.post(`${environment.API_URL}eje.php?actualizar=${eje.id_eje}`, eje)
  }

  eliminarEje(id: any) : Observable<any>{
    return this.http.get(`${environment.API_URL}eje.php?borrar=${id}`)
  }
}
