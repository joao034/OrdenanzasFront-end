import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';

@Component({
  selector: 'app-agregar-eje',
  templateUrl: './agregar-eje.component.html',
  styleUrls: ['./agregar-eje.component.css']
})
export class AgregarEjeComponent implements OnInit {

  formEje : FormGroup

  constructor(private router: Router, private crudEje : CrudEjesService)
  {
    this.formEje = new FormGroup({
      nombre : new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  agregarEje(){
    this.crudEje.agregarEje(this.formEje.value).subscribe(
      (respuesta) =>{
        alert('Eje agregado correctamente!')
        this.redireccionListaEjes()
      }
    )
  }

  redireccionListaEjes(){
    this.router.navigate(['/ejes'])
  }

  cancelar(){
    this.router.navigate(['/ejes'])
  }

}
