import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagePrincipalComponent } from './pages/page-principal/page-principal.component';


const routes: Routes = [
  {
    path : '', component : PageLoginComponent
  },
  {
    path: 'login', component: PageLoginComponent
  },
  {
    path: 'principal', component: PagePrincipalComponent,
    //Protege la ruta
    canActivate: [GuardGuard]
  },
  {
    path : 'inicio',
    component: PagePrincipalComponent,
    loadChildren: () => import('./inicio/inicio.module').then( (m) => m.InicioModule ),
    canActivate : [GuardGuard]
  },
  {
    path: 'usuarios',
    component: PagePrincipalComponent,
    loadChildren: () =>  import('./usuarios/usuarios.module').then( (m) =>  m.UsuariosModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'ordenanzas', 
    component: PagePrincipalComponent,
    loadChildren: () =>  import('./ordenanzas/ordenanzas.module').then( (m) =>  m.OrdenanzasModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'ejes', 
    component: PagePrincipalComponent,
    loadChildren: () =>  import('./ejes/ejes.module').then( (m) =>  m.EjesModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'departamentos', 
    component: PagePrincipalComponent,
    loadChildren: () =>  import('./departamentos/departamentos.module').then( (m) =>  m.DepartamentosModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'años', 
    component: PagePrincipalComponent,
    loadChildren: () =>  import('./años/años.module').then( (m) =>  m.AñosModule),
    canActivate: [GuardGuard]
  },

  /*{ 
    //Ruta no definida
    path: '**', redirectTo: 'login' 
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
