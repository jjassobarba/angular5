import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey = '4cd627965f7372c798bd21a142c1f7b5';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) { }

  getCartelera() {

    // tslint:disable-next-line:prefer-const
    let desde = new Date();
    // tslint:disable-next-line:prefer-const
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    // tslint:disable-next-line:prefer-const
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDay() }`;
    // tslint:disable-next-line:prefer-const
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDay() }`;

    // tslint:disable-next-line:max-line-length
    const URL = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).map( res => res.json());
  }

  getPopulares() {

    const URL = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( URL )
                .map( res => res.json());
  }

  getPopularesNinos() {

    // tslint:disable-next-line:max-line-length
    const URL = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc:&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( URL )
                .map( res => res.json());
  }

  buscarPelicula( texto: string ) {

    // tslint:disable-next-line:max-line-length
    const URL = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( URL )
                .map( res => res.json());
  }

}
