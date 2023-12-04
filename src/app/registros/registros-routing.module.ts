import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActualizarRolComponent} from "./actualizar-rol/actualizar-rol.component";




const routes: Routes = [
  { path: '', component: ActualizarRolComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule {



}
