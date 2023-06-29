import { Component } from '@angular/core';

interface Entrance {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  message = ''; 
  registrado=false;
  name: string='';
  lastName: string='';
  entrances: Entrance[];

  constructor(){
    this.entrances = [

      {title: "Java cada vez más presente con Angular."}, 
      {title: "Java se encuentra presente hace más de 20 años."},
      {title: "Hay sobre oferta de trainees con pocos conocimientos."},
      {title: "Por eso es que estoy haciendo esta prueba de bucle for con directivas."},
      {title: "¿Llegaré a saber usar Angular? SI"}     

    ]
  }

  addUser(){
    this.registrado=true;
    this.message="Usuario registrado correctamente."
  }
}
