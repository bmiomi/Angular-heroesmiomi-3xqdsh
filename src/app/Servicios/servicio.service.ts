import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {HeroeModel} from '../Modelo/Heroe'
import {map,delay} from 'rxjs/operators';

@Injectable()
export class ServicioService {

  constructor(private http:HttpClient ) { }

   Url ='https://affable-alpha-214506.firebaseio.com'

  CrearHeroe(heroe:HeroeModel){
    return this.http.post(`${this.Url}/heroe.json`,heroe)
    .pipe(
      map(
        (result:any)=>{
          heroe.id= result.name;
          return heroe
        }
      ))

  }
  actualizar_heroe(heroe:HeroeModel){
    const temHeroe ={
      ... heroe
    }
    delete temHeroe.id
    return this.http.put(`${this.Url}/heroe/${heroe.id}.json`,temHeroe)
  }
  
  eliminarHeroe(id:string){
    return this.http.delete(`${this.Url}/heroe/${id}.json`)
  }

  Obtenerheroe(id:string)
  {
    return this.http.get(`${this.Url}/heroe/${id}.json`)
  }

  obtenerheroes(){
    return this.http.get(`${this.Url}/heroe.json`).pipe(
      map(this.crearArreglo), delay(200)
     
        )};

  private crearArreglo( heroeObj:object){
    const heroes:HeroeModel[]=[]  
    
    Object.keys(heroeObj).forEach( key=>{

      const heroe:HeroeModel=heroeObj[key];
      heroe.id=key;
      heroes.push(heroe);

    });
    return heroes
 
  }


}