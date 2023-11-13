import { Component } from '@angular/core';


@Component({
  selector: 'app-body-gestionar-solicitudes',
  templateUrl: './body-gestionar-solicitudes.component.html',
  styleUrls: ['./body-gestionar-solicitudes.component.css']
})
export class BodyGestionarSolicitudesComponent {

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
      title: 'Los miserables',
      author: 'A2',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A3',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A4',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A5',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'Victor hugo 23',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A7',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A8',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A9',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A10',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A11',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'Victor hugo 10',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A13',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'A14',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
    {
      title: 'Los miserables',
      author: 'Victor hugo 25',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
  ];

  collection2: any[] = [
    {
      id: '000248745',
      fecha1: '09/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000294102',
      fecha1: '10/09/23',
      fecha2: '16/09/23',
      fecha3: '23/09/23',
      fecha4: '21/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000275412',
      fecha1: '15/09/23',
      fecha2: '21/09/23',
      fecha3: '28/09/23',
      fecha4: '',
      recogio: true,
      devolvio: false,
    },
    {
      id: '000216824',
      fecha1: '16/09/23',
      fecha2: '',
      fecha3: '',
      fecha4: '',
      recogio: false,
      devolvio: false,
    },
    {
      id: '000236874',
      fecha1: '16/09/23',
      fecha2: '',
      fecha3: '',
      fecha4: '',
      recogio: false,
      devolvio: false,
    },
    {
      id: '000224571',
      fecha1: '17/09/23',
      fecha2: '',
      fecha3: '',
      fecha4: '',
      recogio: false,
      devolvio: false,
    },
    {
      id: '000217542',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000204857',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000274851',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000210241',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000240148',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000201756',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000221475',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
    },
    {
      id: '000254287',
      fecha1: '10/09/23',
      fecha2: '10/09/23',
      fecha3: '17/09/23',
      fecha4: '16/09/23',
      recogio: true,
      devolvio: true,
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

    // Ordenar la colección2 por fecha de solicitud de manera descendente (más reciente primero)
    this.collection2.sort((a, b) => {
      const dateA = this.parseDate(a.fecha1);
      const dateB = this.parseDate(b.fecha1);
      return dateB - dateA;
    });
  }

  private parseDate(dateString: string): number {
    const dateParts = dateString.split('/');
    // Asumiendo que el formato es DD/MM/YY o similar
    const formattedDate = `20${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return new Date(formattedDate).getTime();
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
  toggleDevolvio(item: any): void {
    // Solo permitir marcar "Devolvio" si "Recogio" está marcado y "Devolvio" no está marcado
    if (item.recogio && !item.devolvio) {
      item.devolvio = true;
    }
  }

}
