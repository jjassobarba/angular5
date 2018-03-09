import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
    const URL = 'http://image.tmdb.org/t/p/w500';
    console.log(pelicula);

    if ( pelicula.backdrop_path ) {
      return URL + pelicula.backdrop_path;
    } else {
      if ( pelicula.poster_path ) {
        return URL + pelicula.poster_path;
      } else {
        return 'assets/NoImage.png';
      }
    }


  }

}
