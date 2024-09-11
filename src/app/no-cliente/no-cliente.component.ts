import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngIf

@Component({
  selector: 'app-no-cliente',
  standalone: true, // Componente independiente
  imports: [CommonModule, FormsModule], 
  templateUrl: './no-cliente.component.html',
  styleUrl: './no-cliente.component.css'
})
export class NoClienteComponent {
  nombre: string = '';
  tipo: string = '';
  contacto: string = '';
  registrado: boolean = false;

  registrarNoCliente() {
    this.registrado = true;
    console.log('No cliente registrado:', {
      nombre: this.nombre,
      tipo: this.tipo,
      contacto: this.contacto
    });
  }
}
