import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";
import { EditarUsuarioComponent } from "./components/editar-usuario/editar-usuario.component";
import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";
import { PageUsuariosComponent } from "./page-usuarios/page-usuarios.component";

const routes: Routes = [
    {path: '', component: PageUsuariosComponent},
    {path: 'agregar-usuario', component: AgregarUsuarioComponent},
    {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class UsuariosRoutingModule {}