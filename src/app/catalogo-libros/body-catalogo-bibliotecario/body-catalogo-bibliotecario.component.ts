import { Component, OnInit} from '@angular/core';
import { LibroService } from "../../Services/libros.service";
import { DatosListadoLibro } from "../../Modelos/DatosListadoLibro";


@Component({
  selector: 'app-body-catalogo-bibliotecario',
  templateUrl: './body-catalogo-bibliotecario.component.html',
  styleUrls: ['./body-catalogo-bibliotecario.component.css']
})
export class BodyCatalogoBibliotecarioComponent implements OnInit{
  p: number = 1;
  page = 0;
  size = 8;
  libros: DatosListadoLibro[] = [];
  filtro:boolean=false;


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
        this.libros = libros.map(libro => ({
          ...libro,
          portada: `data:image/png;base64, ${libro.portada}`,
          autoreNombres: Array.isArray(libro.autoreNombres) ? libro.autoreNombres.join(', ') : libro.autoreNombres
        }));
        console.log("Data from service2: ", this.libros);
        this.filtro = this.libros.length !== 0;
        console.log('estado:', this.filtro);
      });
  }



}
