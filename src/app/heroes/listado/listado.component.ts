import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})



export class ListadoComponent  {

  
  listadoHeroe:string [] = ['Goku','Super Man','Hulk','Aquaman'];

  borrado:string="";

  borrarHeroe(){

    this.borrado=this.listadoHeroe.shift() || "";
    
  }

 
 
}
