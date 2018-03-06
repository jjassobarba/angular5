import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'MEX',
    pais: 'México'
  },
  {
    codigo: 'CRI',
    pais: 'Costa Rica'
  }];

  sexos = ['Hombre', 'Mujer'];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm: ', forma);
    console.log('Valor forma: ', forma.value);
    console.log('Usuario: ', this.usuario);
  }

}
