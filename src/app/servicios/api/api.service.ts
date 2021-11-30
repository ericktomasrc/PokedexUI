import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ResponseI } from '../../modelos/response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlPokemon:string="/pokemon/GetAllPokemon/";
  urlPokemon_:string="/pokemon/GetAllPokemonNombre?nombre=";

  constructor(private http:HttpClient) { }
  getAllPokemon():Observable<ResponseI>{
    let direccionUrl=this.urlPokemon;
    return  this.http.get<ResponseI>(direccionUrl);
  }
  getPorPokemon(nombre:any):Observable<ResponseI>{
    let direccionUrl=this.urlPokemon_+nombre;
    return  this.http.get<ResponseI>(direccionUrl);
  }
}
