import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  nombre: string = "capitan américa";
  arrayNumeros: Number[] = [2,3,4,56,7,9,12];
  PI:number = Math.PI;
  porcentaje: number = 0.345;
  fecha = '2021-02-02';
  idioma: string = "es";



  valorPromesa = new Promise<string>( (resolve) =>{
    setTimeout(()=>{
      resolve("Eres la mejor novia del mundo y te aprecio mucho");
    },5000);
  })

  heroe = {
    nombre:'Óscar',
    apellido:'izquierdo',
    edad: 34
  }

  constructor() { }

  ngOnInit(): void {
  }

  inEs(){
    this.idioma = "es";
  }
  inIng(){
    this.idioma = "en";
  } 
  inFr(){
    this.idioma = "fr";
  }



}
