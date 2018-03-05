import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alert: string = 'alert-danger';
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;

  propiedades: Object = {
    danger: true
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
