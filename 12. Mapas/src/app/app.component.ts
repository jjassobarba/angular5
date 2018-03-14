import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

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
  marcadorSel = null;

  constructor(public _ms: MapasService) {
    this._ms.cargarMarcadores();
  }

  clickMapa(evento) {
    // tslint:disable-next-line:prefer-const
    let marcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._ms.insertarMarcador(marcador);
  }

  clickMarcador(marcador: Marcador, i: number) {
    this.marcadorSel = marcador;
  }

  dragEndMarcador(marcador: Marcador, evento) {
    // tslint:disable-next-line:prefer-const
    let lat = evento.coords.lat;
    // tslint:disable-next-line:prefer-const
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();
  }
}
