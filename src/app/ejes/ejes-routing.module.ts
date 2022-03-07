import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageEjesComponent } from "./page-ejes/page-ejes.component";

const routes: Routes = [
    {path: '', component: PageEjesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class EjesRoutingModule {}