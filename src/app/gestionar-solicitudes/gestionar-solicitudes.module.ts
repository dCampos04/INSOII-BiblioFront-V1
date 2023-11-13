import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GestionarSolicitudesComponent} from "./gestionar-solicitudes.component";
import {GestionarSolicitudesRoutingModule} from "./gestionar-solicitudes-routing.module";
import { BodyGestionarSolicitudesComponent } from './body-gestionar-solicitudes/body-gestionar-solicitudes.component';
import {
  BodyLibrosSolicitadosComponent,
  BookFilterPipe
} from './body-libros-solicitados/body-libros-solicitados.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    GestionarSolicitudesComponent,
    BodyGestionarSolicitudesComponent,
    BodyLibrosSolicitadosComponent,
    BookFilterPipe
  ],
  imports: [
    CommonModule,
    GestionarSolicitudesRoutingModule,
    NgxPaginationModule
  ]
})
export class GestionarSolicitudesModule { }
