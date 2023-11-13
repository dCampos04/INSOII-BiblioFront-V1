import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistorialSolicitudesComponent} from "./historial-solicitudes.component";
import {HistorialSolicitudesRoutingModule} from "./historial-solicitudes-routing.module";
import { BodyHistorialSolicitudesComponent } from './body-historial-solicitudes/body-historial-solicitudes.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    HistorialSolicitudesComponent,
    BodyHistorialSolicitudesComponent
  ],
    imports: [
        CommonModule,
        HistorialSolicitudesRoutingModule,
        NgxPaginationModule
    ]
})
export class HistorialSolicitudesModule { }
