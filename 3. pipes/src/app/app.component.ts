import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Angel';
  nombre2 = 'JuAn AngEl JaSso BaRba';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  // tslint:disable-next-line:no-shadowed-variable
  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('llegó la data'));
  });

  fecha = new Date();

  activar = true;
}
