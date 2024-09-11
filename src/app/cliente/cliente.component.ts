import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas como *ngIf
import { FormsModule } from '@angular/forms'; // Para ngModel
import { DatosClienteComponent } from '../datos-cliente/datos-cliente.component'; // Importa DatosClienteComponent

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, DatosClienteComponent], 
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  identificacion: string = '';
  tipoIdentificacion: string = '';
  clienteDatos: any = null;

  consultarCliente() {
    // Simulación de llamada a una API para obtener los datos del cliente
    this.clienteDatos = {
      nombres: 'Juan Pérez',
      tipoCliente: 'Gold',
      contacto: 'juan.perez@mail.com',
      cuentas: [
        { numero: '123456789', tipo: 'Ahorro' },
        { numero: '987654321', tipo: 'Corriente' }
      ]
    };
  }
}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
// import { DatosClienteComponent } from '../datos-cliente/datos-cliente.component';
// import { ClienteService } from './cliente.service'; // Importa el servicio

// @Component({
//   selector: 'app-cliente',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule, DatosClienteComponent],
//   templateUrl: './cliente.component.html',
//   styleUrls: ['./cliente.component.css']
// })
// export class ClienteComponent {
//   identificacion: string = '';
//   tipoIdentificacion: string = '';
//   clienteDatos: any = null;
//   errorMessage: string = '';

//   constructor(private clienteService: ClienteService) {}

//   consultarCliente() {
//     // Llama al servicio para consultar los datos del cliente
//     this.clienteService.consultarCliente(this.identificacion, this.tipoIdentificacion)
//       .subscribe({
//         next: (data) => {
//           this.clienteDatos = data; // Asigna los datos recibidos a la propiedad clienteDatos
//         },
//         error: (err) => {
//           console.error('Error al consultar el cliente:', err);
//           this.errorMessage = 'Error al consultar los datos del cliente';
//         }
//       });
//   }
// }
