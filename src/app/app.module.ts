import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ShowMovieComponent } from './movie/show-movie/show-movie.component';
import { ActorComponent } from './actor/actor.component';
import { ShowActorComponent } from './actor/show-actor/show-actor.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
//import { ShowMovComponent } from './movie/show-mov/show-mov.component';
//import { ShowActComponent } from './actor/show-act/show-act.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ShowMovieComponent,
    ActorComponent,
    ShowActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
