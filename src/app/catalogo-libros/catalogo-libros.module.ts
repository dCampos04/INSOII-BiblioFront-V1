import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoLibrosComponent } from "./catalogo-libros.component";
import { CatalogoLibrosRoutingModule } from "./catalogo-libros-routing.module";
import { BodyCatalogoLectorComponent } from './body-catalogo-lector/body-catalogo-lector.component';
import { BodyCatalogoBibliotecarioComponent } from './body-catalogo-bibliotecario/body-catalogo-bibliotecario.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    CatalogoLibrosComponent,
    BodyCatalogoLectorComponent,
    BodyCatalogoBibliotecarioComponent
  ],
  imports: [
    CommonModule,
    CatalogoLibrosRoutingModule,
    NgxPaginationModule
  ]
})
export class CatalogoLibrosModule { }
