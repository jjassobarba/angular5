import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 19.7254987;
  lng = -101.1223307;
  zoom = 15;

  constructor(public _ms: MapasService) {
    
  }

  clickMapa(evento) {
    console.log(evento);
  }
}
