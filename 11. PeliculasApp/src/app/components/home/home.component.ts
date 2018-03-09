import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  ninos: any;

  constructor(public _ps: PeliculasService) {

    this._ps.getCartelera().subscribe(data => this.cartelera = data.results );
    this._ps.getPopulares().subscribe(data => this.populares = data.results);
    this._ps.getPopularesNinos().subscribe(data => this.ninos = data.results);

  }

  ngOnInit() {
  }

}
