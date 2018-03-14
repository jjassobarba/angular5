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

  insertarMarcador(nuevoMarcador: Marcador) {
    this.marcadores.push(nuevoMarcador);
    this.guardarMarcadores();
  }

  borrarMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }
}
