import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(collection: any[], statuses: string[]): any[] {
    return collection.filter(item => statuses.includes(item.status));
  }
}

@Component({
  selector: 'app-body-libros-solicitados',
  templateUrl: './body-libros-solicitados.component.html',
  styleUrls: ['./body-libros-solicitados.component.css']
})
export class BodyLibrosSolicitadosComponent {
  p: number = 1;



  collection: any[] = [
    {
      title: 'Crimen y castigo',
      author: 'Fiodor Dostoievski',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'El extranjero',
      author: 'Albert Camus',
      image: './assets/El%20extranjero.jpg',
      status: 'Disponible'
    },
    {
      title: 'El principe',
      author: 'Nicolas Maquiavelo',
      image: './assets/elprincipe-416x655.jpg',
      status: 'Reservado'
    },
    {
      title: 'El retrato oval',
      author: 'Edgar Allan Poe',
      image: './assets/El_retrato_oval-Allan_Poe_Edgar-md.png',
      status: 'Disponible'
    },
    {
      title: 'La metamorfosis',
      author: 'Frank Kafka',
      image: './assets/La%20metamorfosis.jpeg',
      status: 'No Disp.'
    },
    {
      title: 'La odisea',
      author: 'Homero',
      image: './assets/La%20odisea.jpg',
      status: 'Disponible'
    },
    {
      title: 'Los miserables',
      author: 'Victor Hugo',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Rayuela',
      author: 'Julio Cortazar',
      image: './assets/Rayuela.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't1',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't2',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't3',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't4',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't5',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't6',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't7',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't8',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Disponible'
    },
    {
      title: 'Crimen y castigo',
      author: 't9',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'No Disp.'
    },
    {
      title: 'Crimen y castigo',
      author: 't10',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Reservado'
    },
    {
      title: 'Crimen y castigo',
      author: 't11',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Reservado'
    },  {
      title: 'Crimen y castigo',
      author: 't12',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Reservado'
    },
    {
      title: 'Crimen y castigo',
      author: 't13',
      image: './assets/Crimen%20y%20castigo.jpeg',
      status: 'Reservado'
    },
  ];

   getStatusColor(status: string): string {
    switch (status) {
      case 'Disponible':
        return '#e47717';
      case 'Reservado':
        return '#e47717';
      case 'No Disp.':
        return '#e47717';
      default:
        return '#000000'; // Color por defecto o ajusta según tu necesidad
    }
  }

  constructor() {
    // Ordenar la colección por título de la A a la Z al inicializar el componente
    this.collection.sort((a, b) => a.title.localeCompare(b.title));
  }

  toggleSolicitudes(item: any): void {
    // Si showSolicitudes es undefined o false, mostrar las solicitudes, de lo contrario, ocultarlas
    item.showSolicitudes = !item.showSolicitudes;
    if (item.showSolicitudes) {
      item.solicitudes = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        fechaSolicitud: 'Fecha Solicitud',
        fechaRecojo: 'Fecha Recojo',
        fechaMaxDevolucion: 'Fecha Max Devolucion',
        fechaDevolucion: 'Fecha Devolucion',
        recogio: 'Recogio',
        devolvio: 'Devolvio',
      }));
    }
  }
}
