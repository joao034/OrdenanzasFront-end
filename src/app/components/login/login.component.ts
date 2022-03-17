import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  group: FormGroup //Nombre del formulario

  //Usuario de tipo estatico para que puede ser llamado desde otros componentes
  public static usuario : Usuario 

  constructor(private loginService : LoginService, private router : Router) { 
    //Asignando los valores que el usuario digite en los inputs
    this.group = new FormGroup({
      id_usuario: new FormControl(null, [Validators.required, Validators.required]),
      clave: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }


  loginUsuario(){
    //llamado al servicio pasando los valores del formulario
    this.loginService.loginUsuario(this.group.value).subscribe(
      (datos) => {
        //Si el servidor devuelve algo distinto de null, es decir si el usuario existe
        if(datos != null){
          //instancio mi objeto usuario pasando los datos que devuelve el servidor
          LoginComponent.usuario = datos;
          console.log(LoginComponent.usuario)
          this.redireccion()
        }else{
          console.log(LoginComponent.usuario)
          alert('Usuario o Contraseña Incorrecta!')
        }
      });
    }

    redireccion(){
      this.router.navigate([('/ordenanzas')])
    }
  }

