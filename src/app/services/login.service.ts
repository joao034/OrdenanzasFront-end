import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUsuario(usuario: Usuario) : Observable<any>{
    return this.http.post(`${environment.API_URL}loginUsuario.php`, JSON.stringify(usuario));
  }

}
