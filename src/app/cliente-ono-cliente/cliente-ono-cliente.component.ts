import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; 
import { ClienteComponent } from '../cliente/cliente.component'; // Importar componentes dependientes
import { NoClienteComponent } from '../no-cliente/no-cliente.component'; 
@Component({
  selector: 'app-cliente-ono-cliente',
  standalone: true,
  imports: [CommonModule, ClienteComponent, NoClienteComponent], 
  templateUrl: './cliente-ono-cliente.component.html',
  styleUrl: './cliente-ono-cliente.component.css'
})
export class ClienteOnoClienteComponent {
  cliente: boolean | null = null;

  esCliente(valor: boolean) {
    this.cliente = valor;
  }
}
