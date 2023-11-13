import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        NgxPaginationModule
    ]
})
export class RegistrarLibrosModule { }
