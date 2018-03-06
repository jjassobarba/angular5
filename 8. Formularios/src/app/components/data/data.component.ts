import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Angel',
      apellido: 'Jasso'
    },
    correo: 'jjassobarba@gmail.com'
  };

  constructor() {
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required),
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
  }
}

