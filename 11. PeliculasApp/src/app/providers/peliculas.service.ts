import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class PeliculasService {

  private apikey = '4cd627965f7372c798bd21a142c1f7b5';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }

  getMovies() {
    const URL = `${this.urlMovieDb}/movie/550?api_key=${this.apikey}&lang=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(URL).map( res => res.json());
  }
}
