import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageOrdenanzasComponent } from "./page-ordenanzas/page-ordenanzas.component";

const routes: Routes = [
    {path: '', component: PageOrdenanzasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class OrdenanzasRoutingModule {}