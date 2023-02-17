import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';

const routes: Routes = [
  {path: 'actors', component:ActorComponent}, {path: 'movies', component:MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
