import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteOnoClienteComponent } from './cliente-ono-cliente/cliente-ono-cliente.component'; // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClienteOnoClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BancoApp2';
}
