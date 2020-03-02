import { Component, OnInit } from '@angular/core';
import {ServicioService}from '../Servicios/servicio.service';
import {HeroeModel} from '../Modelo/Heroe';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  cargando=false;
  heroes:HeroeModel[]=[]

  constructor( private servicioheroe:ServicioService ) { }

  ngOnInit() {
    
    this.cargando=true
    this.servicioheroe.obtenerheroes().subscribe(
      res=>{console.log(res)
      this.heroes=res;
      this.cargando=false
      }
    )
    
      }

    borrar(heroe:HeroeModel,i:number){
    
  Swal.fire({
    title:"¿Estas Seguro?",
    text:`Deseas borrar a ${heroe.nombre}`,
    type:"question",
    showConfirmButton:true,
    showCancelButton: true
  }).then(
    res=>{
      if(res.value){
          this.heroes.splice(i,1)
          this.servicioheroe.eliminarHeroe(heroe.id).subscribe()
      }

    }
  )

    

  }



}