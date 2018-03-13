import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: 19.7254987,
      lng: -101.1223307,
      titulo: 'ClusterTIM',
      draggable: true
    };

    this.marcadores.push(nuevoMarcador);
  }
}
