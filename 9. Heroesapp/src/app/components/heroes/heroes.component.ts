import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = true;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe(data => {      
      setTimeout(() => {
        this.loading = false;
        this.heroes = data;}
        ,1500
      );
    });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe( resp => {
      if (resp) {
        console.error(resp);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
