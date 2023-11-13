import { Component } from '@angular/core';

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

  openModal() {
    this.showModal = true;
    // Limpiar propiedades relacionadas con el modal
  }
  closeModal() {
    this.showModal = false;
    // Limpiar propiedades relacionadas con el modal
  }

  validarCampos(): boolean {
    const titulo = (<HTMLInputElement>document.getElementById('titulo')).value;
    const portada = (<HTMLInputElement>document.getElementById('portada')).value;
    const autor = (<HTMLInputElement>document.getElementById('autor')).value;

    if (!titulo || !portada || !autor) {
      // Al menos uno de los campos está vacío
      alert('Por favor, complete los campos Título, Portada y Autor.');
      return false;
    }

    // Todos los campos están llenos
    return true;
  }

  // Agrega esta función para abrir el modal si la validación es exitosa

}
