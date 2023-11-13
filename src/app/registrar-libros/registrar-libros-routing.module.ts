import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarLibrosComponent } from "./registrar-libros.component";
import { BodyRegistrarLibroComponent } from "./body-registrar-libro/body-registrar-libro.component";



const routes: Routes = [
  { path: '', component: RegistrarLibrosComponent},
  { path: 'registro', component: BodyRegistrarLibroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarLibrosRoutingModule {



}
