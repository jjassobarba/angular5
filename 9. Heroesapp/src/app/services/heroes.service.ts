import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  fireUrl = 'https://heroesapp-c7e5b.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-c7e5b.firebaseio.com/heroes/';

  constructor( private http: Http) {

  }

  nuevoHeroe(heroe: Heroe) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(heroe);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.fireUrl, body, {headers}).map( res => {
      console.log(res.json());
      return res.json();
    });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(heroe);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // tslint:disable-next-line:prefer-const
    let url = `${ this.heroeUrl }/${ key$ }.json`;

    return this.http.put(url, body, {headers}).map( res => {
      console.log(res.json());
      return res.json();
    });
  }

  getHeroe(key$: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.get(url).map(res => res.json());
  }

  getHeroes() {
    return this.http.get(this.fireUrl).map(res => res.json());
  }

  borrarHeroe(key$: string) {

    // tslint:disable-next-line:prefer-const
    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.delete(url).map( res => res.json());
  }

}
