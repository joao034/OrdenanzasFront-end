import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesAniosComponent } from "./pages-anios/pages-anios.component";

const routes: Routes = [
    {path: '', component: PagesAniosComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AñosRoutingModule {}