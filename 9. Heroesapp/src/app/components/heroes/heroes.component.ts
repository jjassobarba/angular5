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

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
      console.log(data);
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
