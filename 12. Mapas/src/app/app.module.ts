import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import { MapasService } from './services/mapas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDizKwyTPn3NgIY731VapJ4Rl_CCeheQb8'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
