import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarLibrosComponent } from "./registrar-libros.component";
import { RegistrarLibrosRoutingModule } from "./registrar-libros-routing.module";
import { BodyRegistrarLibroComponent } from './body-registrar-libro/body-registrar-libro.component';
import {NgxPaginationModule} from "ngx-pagination";




@NgModule({
  declarations: [
    RegistrarLibrosComponent,
    BodyRegistrarLibroComponent,
  ],
  imports: [
    CommonModule,
    RegistrarLibrosRoutingModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class RegistrarLibrosModule { }
