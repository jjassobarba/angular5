import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if (activar) {
      // tslint:disable-next-line:prefer-const
      let encriptedValue = '';
      for (let i = 0; i < value.length; i++) {
        encriptedValue += '*';
      }
      return encriptedValue;
    } else {
      return value;
    }
  }

}
