import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialSolicitudesComponent } from "./historial-solicitudes.component";
import { BodyHistorialSolicitudesComponent } from "./body-historial-solicitudes/body-historial-solicitudes.component";




const routes: Routes = [
  { path: '', component: HistorialSolicitudesComponent},
  { path: 'miHistorial', component: BodyHistorialSolicitudesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialSolicitudesRoutingModule { }
