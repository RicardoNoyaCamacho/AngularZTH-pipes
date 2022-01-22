import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "ricardo";
  nombreUpper: string = "NOYA";
  nombreCompleto: string = "rIcArdO noYa";

  fecha: Date = new Date(); //* el dia de hoy

}
