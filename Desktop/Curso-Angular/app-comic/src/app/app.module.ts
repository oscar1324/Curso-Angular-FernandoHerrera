import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Rutas
import { App_routing} from '../app/app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

// Servicios
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';
import { PipesComponent } from './componentes/pipes/pipes.component';

// Idioma
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localEs from '@angular/common/locales/es';
import { CapitalizadoPipe } from './Filtrador/capitalizado.pipe'
registerLocaleData(localeFr);
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    PipesComponent,
    CapitalizadoPipe,
  ],
  imports: [
    BrowserModule,
    App_routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
