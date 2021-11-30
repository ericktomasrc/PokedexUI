import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-buscar-pornombre',
  templateUrl: './buscar-pornombre.component.html',
  styleUrls: ['./buscar-pornombre.component.css']
})
export class BuscarPornombreComponent implements OnInit {
  panelOpenState = false;
  tituloPokemon="Lista de Pokemones";
  listPokemones:any;
  listDebilidades:any;
  listScore:any;
  listTipos:any;
  nombre="Bulbasaur"; //Aqui buscas cada pokemon
  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.api.getPorPokemon(this.nombre).subscribe(data=>{
      if(data!=null){
        this.listPokemones=data.data;
        console.log(data);
        console.log(this.listPokemones);

      }
  },err=>{        
    500
    console.log("Server Disconnected, contact administrator, Error_Parametros");
    }
  );
  }
}
