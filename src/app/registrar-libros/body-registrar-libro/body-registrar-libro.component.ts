import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-body-registrar-libro',
  templateUrl: './body-registrar-libro.component.html',
  styleUrls: ['./body-registrar-libro.component.css']
})
export class BodyRegistrarLibroComponent {
  mostrarPrevisualizacion(event: any): void {
    const input = event.target;
    const preview = document.getElementById('preview') as HTMLImageElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          preview.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  showModal = false;
  showModal2 = false;

  openModal() {
    this.showModal = true;
    // Limpiar propiedades relacionadas con el modal
  }
  openModal2() {
    this.showModal2 = true;
    // Limpiar propiedades relacionadas con el modal
  }
  closeModal() {
    this.showModal = false;
    this.showModal2= false;
    // Limpiar propiedades relacionadas con el modal
  }


  public titulo:string="";
  public autor:string="";
  public portada:string="";

  constructor(private router:Router) {
  }
  public enviarFormulario(){
    console.log(this.titulo, this.autor, this.portada)
    if(this.titulo && this.autor && this.portada){
      this.openModal()
      return;}
    else {
      this.openModal2()
    }
  }
}
