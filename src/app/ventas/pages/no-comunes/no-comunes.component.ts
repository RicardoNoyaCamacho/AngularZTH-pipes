import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //* i8nSelect
  nombre: string = "Ricardo";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //* i18nPlural
  clientes: string[] = ['Daniela', 'Natalia', 'Marcelo', "Edgar", "Brandon"];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperendo',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': "tenemos # clientes esperando",
  }

  cambiarCliente() {
    this.nombre = "Daniela",
      this.genero = "femenino"
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //* KeyValue Pipe
  persona = {
    nombre: "Ricardo",
    edad: 23,
    direccion: 'CDMX, México'
  }

  //* Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //* Async Pipe
  miObservable = interval(5000); //0,1,2,...,n

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa")
    }, 3500)
  })
}
