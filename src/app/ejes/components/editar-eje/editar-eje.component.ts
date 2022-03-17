import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudEjesService } from 'src/app/services/crud-ejes.service';

@Component({
  selector: 'app-editar-eje',
  templateUrl: './editar-eje.component.html',
  styleUrls: ['./editar-eje.component.css']
})
export class EditarEjeComponent implements OnInit {

  formEje : FormGroup
  idEje : any

  constructor(private router : Router, 
    private activeRoute : ActivatedRoute,
    private crudEje : CrudEjesService) 
  { 
    this.idEje = activeRoute.snapshot.paramMap.get('id')

    this.crudEje.obtenerEje(this.idEje).subscribe(
      (respuesta) => {
        //Asignar valores inputs
        this.formEje.setValue({
          id_eje : respuesta[0]['id_eje'],
          nombre : respuesta[0]['nombre']
        })
      }
    )

    this.formEje = new FormGroup({
      id_eje : new FormControl(),
      nombre : new FormControl()
    })

  }

  ngOnInit(): void {
  }

  editarEje(){
    this.crudEje.editarEje(this.formEje.value).subscribe(
      (respuesta) => {
        alert('Eje actualizado correctamente!')
        this.cancelar()
      }
    )
  }

  cancelar(){
    this.router.navigate(['/ejes'])
  }
  
}
