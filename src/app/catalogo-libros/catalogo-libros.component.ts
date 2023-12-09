import {Component, OnInit} from '@angular/core';
import { AuthService} from "../Services/auth.service";
import { LoginModel} from "../Modelos/LoginModel";
import {Router} from "@angular/router";
import {SharedService} from "../Services/shared.service";

@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent {

  credentials: LoginModel = { username: '', password: '' };
  title = 'catalogoLibros';
  ccc:boolean=false
  bbb:boolean=false
  capcha=""
  url="https://sso.upao.edu.pe:449/Account/Login?client_id=canvas_2345&redirect_uri=https%3A%2F%2Fsso.canvaslms.com%2Flogin%2Foauth2%2Fcallback&response_type=code&scope=openid&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhYWNfaWQiOjE3OTc3MDAwMDAwMDAwMDAwNSwibm9uY2UiOiJmYjQzY2VlZDkzMGI1MGVkYzE0NDVkOWIyYTExY2M5NjJiMTZjYjJiOTdmMTE2ODEiLCJob3N0IjoidXBhby5pbnN0cnVjdHVyZS5jb20iLCJleHAiOjE3MDE2NzcwMjF9.ldDJAcx2p71p_cekcuIi5IedRI9P-OVgkRidtxf8O2I"


  constructor(private loginService: AuthService, private router: Router, private sharedService:SharedService) {}


  onSubmit(): void {
      this.loginService.login(this.credentials)
        .subscribe(response => {
          // Maneja la respuesta del servidor (por ejemplo, almacena el token en localStorage)
          localStorage.setItem('token', response.token);
          console.log('Token recibido:', response.token);
          if(this.capcha!=="51025F"){
            this.bbb=true;
          } else {
            this.enviarDatos();
            this.router.navigate(['/inicio']);
          }

        }, error => {
          // Maneja los errores (puedes mostrar un mensaje de error al usuario, etc.)
          console.error('Error al iniciar sesión:', error);
          this.ccc = true;
        });
      if(this.capcha!=="51025F"&&this.ccc){
        this.bbb=true;
      }
  }


  enviarDatos(){
    this.sharedService.setId(this.credentials.username);
    this.sharedService.setPassword(  this.credentials.password);
  }


}
