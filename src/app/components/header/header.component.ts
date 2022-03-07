import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombreUsuario = LoginComponent.usuario.nombre

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login'])
  }

}
