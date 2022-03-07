import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //Si el usuario no se ha logueado no puede ingresar a las demas rutas
      if(LoginComponent.usuario === null || LoginComponent.usuario === undefined){
        console.log('Usuario no ha iniciado sesion')
        this.router.navigate(['/'])
        return false;
      }
    
      return true;
  }
  
}
