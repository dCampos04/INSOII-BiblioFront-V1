import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {DatosListadoLibro} from "../Modelos/DatosListadoLibro";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }



  private id: string ="";
  private password: string ="";
  libros: DatosListadoLibro[] = [];

  setId(id: string): void {
    this.id = id;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setListaLibros(libros: DatosListadoLibro[]): void {
    this.libros = libros;
  }

  getId(): string {
    return this.id;
  }

  getListaLibros(): DatosListadoLibro[] {
    return this.libros;
  }


  getPassword(): string {
    return this.password;
  }






}
