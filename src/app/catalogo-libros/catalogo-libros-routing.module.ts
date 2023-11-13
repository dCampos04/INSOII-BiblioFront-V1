import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoLibrosComponent } from "./catalogo-libros.component";
import { BodyCatalogoLectorComponent } from "./body-catalogo-lector/body-catalogo-lector.component";
import { BodyCatalogoBibliotecarioComponent } from "./body-catalogo-bibliotecario/body-catalogo-bibliotecario.component";

const routes: Routes = [
  { path: '', component: CatalogoLibrosComponent },
  { path: 'catalogoLector', component: BodyCatalogoLectorComponent},
  { path: 'catalogoBiblio', component: BodyCatalogoBibliotecarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoLibrosRoutingModule { }
