import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./catalogo-libros/catalogo-libros.module').then((m) => m.CatalogoLibrosModule) },
  { path: 'registrar', loadChildren: () => import('./registrar-libros/registrar-libros.module').then((m) => m.RegistrarLibrosModule) },
  { path: 'historial', loadChildren: () => import('./historial-solicitudes/historial-solicitudes.module').then((m) => m.HistorialSolicitudesModule) },
  { path: 'gestionar', loadChildren: () => import('./gestionar-solicitudes/gestionar-solicitudes.module').then((m) => m.GestionarSolicitudesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
