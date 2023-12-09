import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import {DatosListadoLibro} from "../../Modelos/DatosListadoLibro";
import {LibroService} from "../../Services/libros.service";

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
export class BodyLibrosSolicitadosComponent implements OnInit{
  p: number = 1;
  page = 0;
  size = 8;
  libros: DatosListadoLibro[] = [];

  constructor(private libroService: LibroService) {
    // Ordenar la colección por título de la A a la Z al inicializar el componente
    this.collection.sort((a, b) => a.title.localeCompare(b.title));
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
      });
  }

  collection: any[] = [
    {
      title: 'Los miserables',
      author: 'Victor hugo 25',
      image: './assets/LosMiserables.webp',
      codigo: 'PC-52',
      status: 'RESERVADO'
    },
  ];

   getStatusColor(status: string): string {
    switch (status) {
      case 'DISPONIBLE':
        return '#e47717';
      case 'RESERVADO':
        return '#e47717';
      case 'NODISPONIBLE':
        return '#e47717';
      default:
        return '#000000'; // Color por defecto o ajusta según tu necesidad
    }
  }


}
