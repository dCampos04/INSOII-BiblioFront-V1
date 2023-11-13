import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GestionarSolicitudesComponent} from "./gestionar-solicitudes.component";
import {GestionarSolicitudesRoutingModule} from "./gestionar-solicitudes-routing.module";
import { BodyGestionarSolicitudesComponent } from './body-gestionar-solicitudes/body-gestionar-solicitudes.component';
import { BodyLibrosSolicitadosComponent } from './body-libros-solicitados/body-libros-solicitados.component';



@NgModule({
  declarations: [
    GestionarSolicitudesComponent,
    BodyGestionarSolicitudesComponent,
    BodyLibrosSolicitadosComponent
  ],
  imports: [
    CommonModule,
    GestionarSolicitudesRoutingModule
  ]
})
export class GestionarSolicitudesModule { }
