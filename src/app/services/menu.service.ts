import { Injectable } from '@angular/core';

export interface IMenu{
  titulo : string,
  url : string,
  icono: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuAdministrador : IMenu [] = [
    {titulo: 'Ordenanzas', url: '/ordenanzas', icono: 'ordenanza'},
    {titulo: 'Usuarios', url: '/usuarios', icono: 'usuario'},
    {titulo: 'Departamentos', url: '/departamentos', icono: 'departamento'},
    {titulo: 'Ejes', url: '/ejes', icono: 'eje'},
    {titulo: 'Años', url: '/años', icono: 'años'},
  ]

  private menuEditor : IMenu [] = [
    {titulo: 'Ordenanzas', url: '/ordenanzas', icono: 'ordenanza'},
    {titulo: 'Años', url: '/años', icono: 'años'},
    {titulo: 'Usuarios', url: '/usuarios', icono: 'usuario'},
  ]

  constructor() { }

  //Devuelve todos los modulos con los que puede trabajar el administrador
  obtenerMenuAdministrador() : IMenu[]{
    return [...this.menuAdministrador]
  }

  //Devuelve todos los modulos con los que puede trabajar el editor
  obtenerMenuEditor() : IMenu[]{
    return [...this.menuEditor]
  }

  obtenerMenuPorUrlAdministrador(url : string) : IMenu{
    return this.menuAdministrador.find(
      (menu) => menu.url.toLowerCase() === url
    )as IMenu
  }

  obtenerMenuPorUrlEditor(url : string) : IMenu{
    return this.menuEditor.find(
      (menu) => menu.url.toLowerCase() === url
    )as IMenu
  }

}
