import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarEjeComponent } from "./components/agregar-eje/agregar-eje.component";
import { EditarEjeComponent } from "./components/editar-eje/editar-eje.component";
import { PageEjesComponent } from "./page-ejes/page-ejes.component";

const routes: Routes = [
    {path: '', component: PageEjesComponent},
    {path: 'agregar-eje', component: AgregarEjeComponent},
    {path: 'editar-eje/:id', component: EditarEjeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class EjesRoutingModule {}