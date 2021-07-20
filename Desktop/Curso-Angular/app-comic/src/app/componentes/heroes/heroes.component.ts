import { Component, OnInit, Input , EventEmitter} from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   heroes:Heroe[] = [];

  constructor(private servicioH: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.servicioH.getHeroes();
    console.log(this.heroes);
  }

  pasoID(id:Number){
    console.log("Se pasa el id: " + id);
    this.router.navigate( ['/heroe',id] )
  }


}
