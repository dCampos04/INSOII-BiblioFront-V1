import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { LibroService} from "../../Services/libros.service";
import { Libro } from "../../Modelos/Libro";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { DatosRegistroLibro} from "../../Modelos/DatosRegistroLibro";


@Component({
  selector: 'app-body-registrar-libro',
  templateUrl: './body-registrar-libro.component.html',
  styleUrls: ['./body-registrar-libro.component.css']
})
export class BodyRegistrarLibroComponent {

  miFormulario: FormGroup;

  libro: DatosRegistroLibro = {
    // Inicializa con valores por defecto o deja vacío según tus necesidades
    titulo: '',
    portada: '',
    edicion: '',
    categoria: '',
    resumen: '',
    isbn: '',
    fechaPublicacion: new Date(),
    codigoPublico: '',
    autorNombres: [],
    editorialNombre: '',
  };

  public portada: File | undefined;
  autorNombresInput: string = "";


  constructor(private router: Router, private libroService: LibroService, private datePipe: DatePipe) {}

  onAutorNombresChange() {
    const separators = [',', ';', '-'];  // Define los delimitadores permitidos
    const inputParts = this.autorNombresInput.split(new RegExp(`[${separators.join('')}]`));

    // Filtra los elementos vacíos y elimina duplicados
    this.libro.autorNombres = Array.from(new Set(inputParts.map(item => item.trim()).filter(item => item !== '')));
  }

  getCurrentDate(): string {
    // Obtiene la fecha actual en el formato YYYY-MM-DD
    const currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return currentDate || ''; // Asegúrate de manejar el caso en el que currentDate pueda ser nulo
  }


  public mostrarPrevisualizacion(event: any): void {
    const input = event.target;
    const preview = document.getElementById('preview') as HTMLImageElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          preview.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
      this.portada = input.files[0];
    }
  }

  imagen:string = "";
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Almacena la imagen como base64 en libro.portada, eliminando la parte inicial
        const base64Image: string = reader.result as string;
        this.libro.portada = base64Image.split(',')[1];

        console.log("Imagen almacenada en base64:", this.libro.portada);
      };
      reader.readAsDataURL(file);
    }
  }


  public showModal = false;
  public showModal2 = false;

  public openModal() {
    this.showModal = true;
    // Limpiar propiedades relacionadas con el modal
  }

  public openModal2() {
    this.showModal2 = true;
    // Limpiar propiedades relacionadas con el modal
  }

  public closeModal() {
    this.showModal = false;
    this.showModal2 = false;
    // Limpiar propiedades relacionadas con el modal
  }

  agregarLibro() {

    console.log('Imagen en base64:', this.libro.portada);
    this.libroService.agregarLibro(this.libro).subscribe(
      (response) => {
        console.log('Libro agregado:', response);
        // Puedes hacer algo después de agregar el libro, como redirigir a otra página
      },
      (error) => {
        console.error('Error al agregar el libro:', error);
      }
    );
  }
}
