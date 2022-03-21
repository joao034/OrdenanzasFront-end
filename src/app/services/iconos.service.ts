import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon{
  nombre: string,
  url: string
}


@Injectable({
  providedIn: 'root'
})
export class IconosService {

  listaIconos: IIcon[] = [
    {nombre: 'inicio', url: '../assets/icons/inicio.svg'},
    {nombre:'ordenanza', url:'../assets/icons/ordenanza.svg'},
    {nombre:'usuario', url:'../assets/icons/usuario.svg'},
    {nombre:'departamento', url:'../assets/icons/departamento.svg'},
    {nombre:'eje', url:'../assets/icons/eje.svg'},
    //{nombre:'años', url:'../assets/icons/años.svg'},
  ]

  constructor(private matIconRegistry : MatIconRegistry,  private domSanitizer: DomSanitizer) { 
    this.registrarIconos()

  }

  registrarIconos() {
    this.listaIconos.forEach( (icono) => {
      this.matIconRegistry.addSvgIcon(
        icono.nombre,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icono.url)
      )
    })
  }
}
