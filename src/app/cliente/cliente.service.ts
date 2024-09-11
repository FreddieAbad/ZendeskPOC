import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes/consultar';  // URL de tu servicio de Node

  constructor(private http: HttpClient) {}

  consultarCliente(identificacion: string, tipoIdentificacion: string): Observable<any> {
    const body = {
      identificacion: identificacion,
      tipoIdentificacion: tipoIdentificacion
    };

    // Realiza la solicitud POST a la API y devuelve los datos como Observable
    return this.http.post<any>(this.apiUrl, body);
  }
}
