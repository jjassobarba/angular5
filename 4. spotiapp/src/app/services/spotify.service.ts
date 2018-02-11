import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  topTracks: any[] = [];

  urlSpotify = 'https://api.spotify.com/v1/';
  authHeader = 'BQBtFT-0vTdGxlNcrVUEzVh28BaxR23aahO1qSy9Kr8wP-TzilaK3tMClZ6vDHtjKtQBFpgSSdk1WgG8yZ4';

  constructor(public http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authHeader
    });
    return headers;
  }

  getTop(id: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    return this.http.get(url, {headers: this.getHeaders()})
    .map((resp: any) => {
      this.topTracks = resp.tracks;
      return this.topTracks;
    });
  }

  getArtista(id: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${this.urlSpotify}artists/${id}`;

    return this.http.get(url, { headers: this.getHeaders() });
  }

  getArtistas(termino: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;

    return this.http.get(url, { headers: this.getHeaders() })
      .map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });
  }

}
