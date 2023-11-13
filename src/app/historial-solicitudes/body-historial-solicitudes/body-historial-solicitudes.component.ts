import { Component } from '@angular/core';


@Component({
  selector: 'app-body-historial-solicitudes',
  templateUrl: './body-historial-solicitudes.component.html',
  styleUrls: ['./body-historial-solicitudes.component.css']
})
export class BodyHistorialSolicitudesComponent {
  p: number = 1;



  collection: any[] = [
    {
      title: 'Crimen y castigo',
      author: 'Fiodor Dostoievski',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible',
      estadopersonal: 'Ya disponible'
    },
    {
      title: 'El extranjero',
      author: 'Albert Camus',
      image: './assets/El%20extranjero.jpg',
      status: 'Disponible',
      estadopersonal: 'En cola'
    },
    {
      title: 'El principe',
      author: 'Nicolas Maquiavelo',
      image: './assets/elprincipe-416x655.jpg',
      status: 'Reservado',
      estadopersonal: 'Devuleto'
    },
    {
      title: 'El retrato oval',
      author: 'Edgar Allan Poe',
      image: './assets/El_retrato_oval-Allan_Poe_Edgar-md.png',
      status: 'Disponible',
      estadopersonal: 'Devuleto'
    },
    {
      title: 'La metamorfosis',
      author: 'Frank Kafka',
      image: './assets/La%20metamorfosis.jpeg',
      status: 'No Disp.',
      estadopersonal: 'Devuleto'
    },
    {
      title: 'La odisea',
      author: 'Homero',
      image: './assets/La%20odisea.jpg',
      status: 'Disponible',
      estadopersonal: 'Devuleto'
    },
    {
      title: 'Los miserables',
      author: 'Victor Hugo',
      image: './assets/LosMiserables.webp',
      status: 'Reservado',
      estadopersonal: 'Devuleto'
    },
    {
      title: 'Rayuela',
      author: 'Julio Cortazar',
      image: './assets/Rayuela.jpeg',
      status: 'Disponible',
      estadopersonal: 'Devuleto'
    },
  ];

  getStatusColor(estadopersonal: string): string {
    switch (estadopersonal) {
      case 'Devuleto':
        return '#2773dc';
      case 'En cola':
        return '#d03737';
      case 'Ya disponible':
        return '#38be38';
      default:
        return '#000000'; // Color por defecto o ajusta según tu necesidad
    }
  }

  constructor() {
    // Ordenar la colección por título de la A a la Z al inicializar el componente
    this.collection.sort((a, b) => a.title.localeCompare(b.title));
  }

}
