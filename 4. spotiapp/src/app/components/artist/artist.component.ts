import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  pistas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, public _spotifyService: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this._spotifyService.getArtista(id).subscribe(artista => {
          this.artista = artista;
          this._spotifyService.getTop(id)
          .subscribe( pistas => {
            this.pistas = pistas;
            console.log(pistas);
          });
        });
      });
  }

}
