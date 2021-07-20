import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  carpetaA: String = "Marvel";
  carpetaB: String = "DC";
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { 
    this.activatedRoute.params.subscribe( parametros =>{
      this.heroe = this.heroeService.getHeroe( parametros['id'])
    });
  }

  ngOnInit(): void {
    console.log("-----------------------");
    /* Pasando el id y poniendo el servicio de heroe, se obtiene sin necesidad de hacer nada más. Pasas el objeto en verdad
    por el método que mismamente pasas el id */
    console.log(this.heroe);
  }

}
