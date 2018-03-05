import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alerta: string = 'warning';

  constructor() { }

  ngOnInit() {
  }

}
