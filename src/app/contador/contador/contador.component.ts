
import { Component } from '@angular/core';

@Component({
    
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <h1>La base es: {{base}}</h1>

        <button (click)="acumular(base)">+ {{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">- {{base}}</button>
    
    `
})

export class ContadorComponent{

    titulo:string = 'App en Angular';
  
    base:number= 5;
  
    numero:number = 10;
  
    acumular(valor:number)
    {
      this.numero += valor;
    }

}