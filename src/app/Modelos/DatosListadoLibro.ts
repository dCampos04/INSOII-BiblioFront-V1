export interface DatosListadoLibro {
  titulo: string;
  estado: string;
  edicion: string;
  categoria: string;
  resumen: string;
  isbn: string;
  fechaPublicacion: string;
  codigoPublico: string;
  editorialNombre: string;
  autoreNombres: string | string[];
  portada: string;
}
