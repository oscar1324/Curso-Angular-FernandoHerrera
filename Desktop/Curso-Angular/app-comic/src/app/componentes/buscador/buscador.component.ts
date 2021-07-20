import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string = '';
  constructor(private activatedRouter: ActivatedRoute, private route: Router,
      private _heroesService: HeroesService) { }

  ngOnInit() {
   
    this.activatedRouter.params.subscribe( parametros =>{
      this.termino = parametros['termino'];
      this.heroes = this._heroesService.buscarHeroes(parametros['termino']);
   

    })


  }

}
