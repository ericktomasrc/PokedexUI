import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPornombreComponent } from './plantillas/buscar-pornombre/buscar-pornombre.component'; 
import { BuscarTodoComponent } from './plantillas/buscar-todo/buscar-todo.component'; 

const routes: Routes = [
  {path:'', redirectTo:'buscarnombre', pathMatch:'full'},
  {path:'buscarnombre', component:BuscarPornombreComponent},
  {path:'buscartodo', component:BuscarTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
