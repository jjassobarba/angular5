import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  topTracks: any[] = [];

  urlSpotify = 'https://api.spotify.com/v1/';
  authHeader = 'BQD0f9K3eRsivsiomLvKpDsSD4mKNNPuND6l8hWjKZndy1GYm_HvwgjX2OGmi5Tt5US4l__NgZI9Wg8wFQk';

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
