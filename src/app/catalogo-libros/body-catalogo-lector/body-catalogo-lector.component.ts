import {Component, OnInit} from '@angular/core';
import { LibroService } from "../../Services/libros.service";
import { DatosListadoLibro } from "../../Modelos/DatosListadoLibro";

@Component({
  selector: 'app-body-catalogo-lector',
  templateUrl: './body-catalogo-lector.component.html',
  styleUrls: ['./body-catalogo-lector.component.css']
})
export class BodyCatalogoLectorComponent implements OnInit{
  p: number = 1;
  page = 0;
  size = 8;
  libros: DatosListadoLibro[] = [];

  getStatusColor(status: string): string {
    switch (status) {
      case 'DISPONIBLE':
        return '#6ae368';
      case 'RESERVADO':
        return '#f2dc10';
      case 'NODISPONIBLE':
        return '#f83b3b';
      default:
        return '#000000'; // Color por defecto o ajusta según tu necesidad
    }
  }

  constructor(private libroService: LibroService) {
    // Ordenar la colección por título de la A a la Z al inicializar el componente
    this.libros.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.listarLibros(this.page, this.size)
      .subscribe((libros: DatosListadoLibro[]) => {
        console.log("Data from service:", libros);
        this.libros = libros;
        console.log("Data from service:", libros);


      });
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
      case 'DISPONIBLE':
        this.modalImage = 'assets/ModalInicial.jpg.png';
        this.modalBackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
        this.showModal = true;
        this.m1 = true;
        this.m2 = false;
        this.m3 = false;
        break;

      case 'RESERVADO':
        this.modalImage = 'assets/ModalInicial.jpg.png';
        this.modalBackgroundColor = '#ece5e5';
        this.modalButtonColor = '#e47717';
        this.modalButtonTextColor = 'white';
        this.showModal = true;
        this.m1 = false;
        this.m2 = true;
        this.m3 = false;
        break;

      case 'NODISPONIBLE.':
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

  closeModal2() {
    this.showModal = false;
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
