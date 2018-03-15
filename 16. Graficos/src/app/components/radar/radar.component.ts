import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent {

 // Radar
 public radarChartLabels: string[] = ['Comer', 'Tomar', 'Dormir', 'Diseñar', 'Codificar', 'Iterar', 'Correr'];

 public radarChartData: any = [
   {data: [65, 59, 90, 81, 56, 55, 40], label: 'Cantidad'},
   {data: [28, 48, 40, 19, 96, 27, 100], label: 'Frecuencia'}
 ];
 public radarChartType = 'radar';

 // events
 public chartClicked(e: any): void {
   console.log(e);
 }

 public chartHovered(e: any): void {
   console.log(e);
 }

}
