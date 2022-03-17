import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VigenciaService {

  constructor(private http : HttpClient) { }

  obtenerTipoVigencias(){
    return this.http.get(`${environment.API_URL}vigencia.php`)
  }

}
