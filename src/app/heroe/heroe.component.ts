import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HeroeModel} from '../Modelo/Heroe';
import {ActivatedRoute} from '@angular/router';

import {ServicioService}from '../Servicios/servicio.service';
import Swal from 'sweetalert2';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

    heroe= new HeroeModel();

  constructor( private servicioHeroe:ServicioService,
  private rute :ActivatedRoute) { 
  }

  ngOnInit() {
   const id = this.rute.snapshot.paramMap.get('id')
    if (id !=='nuevo'){
      this.servicioHeroe.Obtenerheroe(id).subscribe(
        res=>{
          this.heroe=res;
          this.heroe.id=id
        }
      )

    }
    return
  }

  guardar(form:NgForm){
    if (form.invalid){
      return;
    }

  Swal.fire({
    title:"Espere",
    text:"Guardando la informacion",
    type:"success",
    allowOutsideClick:false
  });

  Swal.showLoading()

  let peticion:Observable<any>
  if(this.heroe.id){
      peticion=this.servicioHeroe.actualizar_heroe(this.heroe)
    }else{
      peticion=this.servicioHeroe.CrearHeroe(this.heroe)
    }

    peticion.subscribe(
    res=>{
        Swal.fire({
    title:`El registro con id ${this.heroe.id}`,
    text:"Se acutalizo conrrectamente.",
    type:"success",
    });
    })

  console.log(` objeto Heroe ${this.heroe}`)
  
  //form.reset()
  }

}