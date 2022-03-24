import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarOrdenanzaComponent } from "./agregar-ordenanza/agregar-ordenanza.component";
import { EditarOrdenanzaComponent } from "./editar-ordenanza/editar-ordenanza.component";
import { ListaOrdenanzasComponent } from "./lista-ordenanzas/lista-ordenanzas.component";

const routes: Routes = [
    {path: '', component: ListaOrdenanzasComponent},
    {path: 'agregar-ordenanza', component: AgregarOrdenanzaComponent},
    {path: 'editar-ordenanza/:id', component: EditarOrdenanzaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class OrdenanzasRoutingModule {}