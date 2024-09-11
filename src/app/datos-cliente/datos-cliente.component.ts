// import { Component, Input } from '@angular/core';

// import { CommonModule } from '@angular/common'; 
// @Component({
//   selector: 'app-datos-cliente',
//   standalone: true,
//   imports: [CommonModule], 
//   templateUrl: './datos-cliente.component.html',
//   styleUrl: './datos-cliente.component.css'
// })
// export class DatosClienteComponent {
//   @Input() cliente: any;
//   movimientos: any[] | null = null;
//   cuentaSeleccionada: any = null;

//   verMovimientos(cuenta: any) {
//     this.cuentaSeleccionada = cuenta;
//     // Simulación de llamada a API para obtener movimientos
//     this.movimientos = [
//       { nrodocumento:'12345', descripcion: 'Depósito', monto: 100 },
//       { nrodocumento:'98765', descripcion: 'Retiro', monto: 50 }
//     ];
//   }
// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-datos-cliente',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './datos-cliente.component.html',
  styleUrl: './datos-cliente.component.css'
})
export class DatosClienteComponent {
  @Input() cliente: any;
  movimientos: any[] | null = null;
  cuentaSeleccionada: any = null;
  movimientosSeleccionados: any[] = []; // Para almacenar los movimientos seleccionados

  verMovimientos(cuenta: any) {
    this.cuentaSeleccionada = cuenta;
    // Simulación de llamada a API para obtener movimientos
    this.movimientos = [
      { nrodocumento: '12345', descripcion: 'Depósito', monto: 100 },
      { nrodocumento: '98765', descripcion: 'Retiro', monto: 50 }
    ];
    this.movimientosSeleccionados = []; // Reiniciar selección al cambiar de cuenta
  }

  toggleSeleccionMovimiento(movimiento: any) {
    const index = this.movimientosSeleccionados.indexOf(movimiento);
    if (index === -1) {
      // Si no está seleccionado, lo agregamos
      this.movimientosSeleccionados.push(movimiento);
    } else {
      // Si ya está seleccionado, lo eliminamos
      this.movimientosSeleccionados.splice(index, 1);
    }
  }

  enviarMovimientos() {
    console.log('Movimientos seleccionados para enviar:', this.movimientosSeleccionados);
    // Aquí iría la lógica de envío de los movimientos seleccionados
    alert(`Movimientos enviados: ${JSON.stringify(this.movimientosSeleccionados)}`);
  }
}
