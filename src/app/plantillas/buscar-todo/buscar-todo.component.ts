import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-buscar-todo',
  templateUrl: './buscar-todo.component.html',
  styleUrls: ['./buscar-todo.component.css']
})
export class BuscarTodoComponent implements OnInit {
  panelOpenState = false;
  tituloPokemon="Lista de Pokemones";
  listPokemones:any;
  listDebilidades:any;
  listScore:any;
  listTipos:any;
  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
    this. getAll();
  }
  getAll(){
    this.api.getAllPokemon().subscribe(data=>{
      if(data!=null){
        this.listPokemones=data.data;
        this.listDebilidades=data.data.debilidades;
        this.listScore=data.data.scoreBase;
        this.listTipos=data.data.tipos;
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

