import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse} from "../Modelos/TokenResponse";
import { LoginModel} from "../Modelos/LoginModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://bibliotecaupao6.onrender.com/usuario';


  constructor(private http: HttpClient) {}

  login(credentials: LoginModel): Observable<TokenResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.baseUrl}/login`;
    return this.http.post<TokenResponse>(url, credentials, {headers});
  }
}
