import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HomeComponent } from './componentes/home/home.component';
import { PipesComponent } from './componentes/pipes/pipes.component';

const app_routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'heroes', component: HeroesComponent},
    {path:'buscar/:termino', component: BuscadorComponent},
    {path:'heroe/:id', component: HeroeComponent},
    {path:'pipes', component: PipesComponent},
    {path:'**', pathMatch:'full', redirectTo: 'home'}
]

export const App_routing = RouterModule.forRoot(app_routes, {useHash: true});
// useHaash: para manejar numeros en parametros de ruta. Si no usamos has, más adelante al utilizar parametros puede fallar --> #
