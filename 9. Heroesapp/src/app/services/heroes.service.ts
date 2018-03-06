import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  fireUrl = 'https://heroesapp-c7e5b.firebaseio.com/heroes.json';

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

}
