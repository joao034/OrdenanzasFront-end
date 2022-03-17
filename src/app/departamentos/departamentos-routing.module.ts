import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarDepartamentoComponent } from "./components/agregar-departamento/agregar-departamento.component";
import { EditarDepartamentoComponent } from "./components/editar-departamento/editar-departamento.component";
import { PageDepartamentosComponent } from "./page-departamentos/page-departamentos.component";

const routes: Routes = [
    {path: '', component: PageDepartamentosComponent},
    {path: 'agregar-departamento', component: AgregarDepartamentoComponent},
    {path: 'editar-departamento/:id', component: EditarDepartamentoComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DepartamentosRoutingModule {}