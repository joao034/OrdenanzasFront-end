import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUsuariosComponent } from './page-usuarios/page-usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageUsuariosComponent,
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    RouterModule, 
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
