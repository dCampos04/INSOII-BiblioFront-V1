import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarRolComponent } from './actualizar-rol/actualizar-rol.component';
import {RegistrosRoutingModule} from "./registros-routing.module";
import {RegistrosComponent} from "./registros.component";



@NgModule({
  declarations: [
    ActualizarRolComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    RegistrosRoutingModule
  ]
})
export class RegistrosModule { }
