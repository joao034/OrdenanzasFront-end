import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listMenu : IMenu[]
  expanded = true

  constructor(private menuService : MenuService) { 
    //Si el usuario es administrador
    if(LoginComponent.usuario.id_permiso_per == 1)
      this.listMenu = this.menuService.obtenerMenuAdministrador()

    //Si el usuario es editor
    if(LoginComponent.usuario.id_permiso_per == 2)
      this.listMenu = this.menuService.obtenerMenuEditor()
  }

  //Salida desde el componente al componentePadre
  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  toggleExpanded(){
    this.expanded = !this.expanded
    this.onToggleExpanded.emit(this.expanded)
  }

  
}
