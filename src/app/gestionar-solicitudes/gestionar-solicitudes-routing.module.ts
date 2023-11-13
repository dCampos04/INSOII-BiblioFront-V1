import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarSolicitudesComponent} from "./gestionar-solicitudes.component";
import { BodyGestionarSolicitudesComponent } from "./body-gestionar-solicitudes/body-gestionar-solicitudes.component";
import { BodyLibrosSolicitadosComponent } from "./body-libros-solicitados/body-libros-solicitados.component";




const routes: Routes = [
  { path: '', component: GestionarSolicitudesComponent},
  { path: 'librosSolicitados', component: BodyLibrosSolicitadosComponent},
  { path: 'gestion', component: BodyGestionarSolicitudesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarSolicitudesRoutingModule { }
