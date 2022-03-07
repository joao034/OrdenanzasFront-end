import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageDepartamentosComponent } from "./page-departamentos/page-departamentos.component";

const routes: Routes = [
    {path: '', component: PageDepartamentosComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DepartamentosRoutingModule {}