import { Component } from "@angular/core";


@Component ({

    selector:'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent{

    nombre:string = 'Ironman';
    edad:number = 43;

    obtenerEdad():string{

        return `${this.nombre} - ${this.edad} `;
    }

    nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=1000;
    }

}