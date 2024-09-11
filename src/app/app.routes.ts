

import { Routes } from '@angular/router';
import { ClienteOnoClienteComponent } from './cliente-ono-cliente/cliente-ono-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NoClienteComponent } from './no-cliente/no-cliente.component';

export const routes: Routes = [
  { path: '', component: ClienteOnoClienteComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'no-cliente', component: NoClienteComponent }
];