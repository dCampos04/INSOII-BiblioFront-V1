

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  ],
  exports: [RouterModule]
})
export class RegistrarLibrosModule { }
