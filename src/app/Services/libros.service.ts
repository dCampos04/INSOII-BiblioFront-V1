import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Page } from "../Modelos/Page";
import { DatosListadoLibro } from "../Modelos/DatosListadoLibro";
import { Libro } from "../Modelos/Libro";
import { DatosRegistroLibro} from "../Modelos/DatosRegistroLibro";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = 'https://bibliotecaupao6.onrender.com/libro';

  constructor(private http: HttpClient) { }

  listarLibros(page: number, size: number): Observable<DatosListadoLibro[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const endpoint = `${this.baseUrl}/catalogo-existente`;
    return this.http.get<DatosListadoLibro[]>(endpoint, {headers}).pipe(
      tap(libros => console.log('Data from service:', libros)),
      catchError(this.handleError)
    );
  }

  agregarLibro(datosRegistroLibro: DatosRegistroLibro): Observable<DatosRegistroLibro> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.baseUrl}/crear-libro`;
    return this.http.post<DatosRegistroLibro>(url, datosRegistroLibro, {headers});
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }




}
