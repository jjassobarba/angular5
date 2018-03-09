import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor(public _ps: PeliculasService, public routes: ActivatedRoute) {
    this.routes.params.subscribe(params => {
      if (params['pelicula']) {
        this.buscar = params['pelicula'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }

    this._ps.buscarPelicula(this.buscar).subscribe();
  }

}
