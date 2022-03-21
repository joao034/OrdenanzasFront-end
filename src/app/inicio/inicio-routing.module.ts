import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesInicioComponent } from './pages-inicio/pages-inicio.component';

const routes : Routes = [
  {path: '', component: PagesInicioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ]
})
export class InicioRoutingModule { }
