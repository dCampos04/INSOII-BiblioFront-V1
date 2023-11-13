import { Component } from '@angular/core';

@Component({
  selector: 'app-body-catalogo-lector',
  templateUrl: './body-catalogo-lector.component.html',
  styleUrls: ['./body-catalogo-lector.component.css']
})
export class BodyCatalogoLectorComponent {
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
      author: 'Victor hugo 2',
      image: './assets/LosMiserables.webp',
      status: 'Reservado'
    },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Disponible':
        return '#6ae368';
      case 'Reservado':
        return '#f2dc10';
      case 'No Disp.':
        return '#f83b3b';
      default:
        return '#000000'; // Color por defecto o ajusta según tu necesidad
    }
  }

  constructor() {
    // Ordenar la colección por título de la A a la Z al inicializar el componente
    this.collection.sort((a, b) => a.title.localeCompare(b.title));
  }

  showModal = false;
  showModal3 = false;
  modalImage: string = '';
  modal3Image: string = '';
  modalBackgroundColor: string = '';
  modal3BackgroundColor: string = '';
  modalButtonColor: string = '';
  modalButtonTextColor: string = '';

  m1 = false;
  m2 = false;
  m3 = false;

  // Método para abrir el modal correspondiente
  openModal(status: string) {
    switch (status) {
      case 'Disponible':
        this.modalImage = 'assets/ModalInicial.jpg.png';
        this.modalBackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
        this.showModal = true;
        this.m1 = true;
        this.m2 = false;
        this.m3 = false;
        break;

      case 'Reservado':
        this.modalImage = 'assets/ModalInicial.jpg.png';
        this.modalBackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
        this.showModal = true;
        this.m1 = false;
        this.m2 = true;
        this.m3 = false;
        break;
      case 'No Disp.':
        this.modalImage = 'assets/SolicitudInvalida.png';
        this.modalBackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
        this.showModal = false;
        this.m1 = false;
        this.m2 = false;
        this.m3 = true;
        this.openModal5()
        break;
      default:
        // En caso de que no haya un modal definido para el estado

    }

  }

  openModal3() {
        this.modal3Image = 'assets/SolicitudExitosa.png';
        this.modal3BackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
    this.showModal3 = true;
  }

  openModal4() {
    this.modal3Image = 'assets/SolicitudEspera.png';
    this.modal3BackgroundColor = '#ece5e5';
    this.modalButtonColor = '#e47717';
    this.modalButtonTextColor = 'white';
    this.showModal3 = true;
  }

  openModal5() {
    this.modal3Image = 'assets/SolicitudInvalida.png';
    this.modal3BackgroundColor = '#ece5e5';
    this.modalButtonColor = '#e47717';
    this.modalButtonTextColor = 'white';
    this.showModal3 = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false;
    // Limpiar propiedades relacionadas con el modal
    this.modalImage = '';
    this.modalBackgroundColor = '';
    this.modalButtonColor = '';
    this.modalButtonTextColor = '';
    if (this.m1){
      this.openModal3()
    }
    if (this.m2){
      this.openModal4()
    }
    if (this.m3){
      this.openModal5()
    }

  }
  closeModal3() {

    this.showModal3 = false;
    // Limpiar propiedades relacionadas con el modal
    this.modal3Image = '';
    this.modal3BackgroundColor = '';
    this.modalButtonColor = '';
    this.modalButtonTextColor = '';
  }
}
