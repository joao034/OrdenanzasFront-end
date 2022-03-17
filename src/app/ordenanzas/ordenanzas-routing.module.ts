import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarOrdenanzaComponent } from "./agregar-ordenanza/agregar-ordenanza.component";
import { PageOrdenanzasComponent } from "./page-ordenanzas/page-ordenanzas.component";

const routes: Routes = [
    {path: '', component: PageOrdenanzasComponent},
    {path: 'agregar-ordenanza', component: AgregarOrdenanzaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class OrdenanzasRoutingModule {}