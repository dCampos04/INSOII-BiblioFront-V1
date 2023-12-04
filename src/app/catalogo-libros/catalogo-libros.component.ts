import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent {
  title = 'catalogoLibros';

  url="https://sso.upao.edu.pe:449/Account/Login?client_id=canvas_2345&redirect_uri=https%3A%2F%2Fsso.canvaslms.com%2Flogin%2Foauth2%2Fcallback&response_type=code&scope=openid&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhYWNfaWQiOjE3OTc3MDAwMDAwMDAwMDAwNSwibm9uY2UiOiJmYjQzY2VlZDkzMGI1MGVkYzE0NDVkOWIyYTExY2M5NjJiMTZjYjJiOTdmMTE2ODEiLCJob3N0IjoidXBhby5pbnN0cnVjdHVyZS5jb20iLCJleHAiOjE3MDE2NzcwMjF9.ldDJAcx2p71p_cekcuIi5IedRI9P-OVgkRidtxf8O2I"

  imagen:string = "";
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Aquí puedes almacenar la imagen como base64 en una variable
        const base64Image: string = reader.result as string;

        this.imagen=base64Image;

        console.log("imagen almacenada:", this.imagen)
      };
      reader.readAsDataURL(file);
    }
  }

}
