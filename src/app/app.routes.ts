import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Emprestimos } from './components/emprestimos/emprestimos';
import { Devolucoes } from './components/devolucoes/devolucoes';

export const routes: Routes = [
  { path: '', component: Home}, // primeira tela
  { path: 'emprestimos', component: Emprestimos },
  { path: 'devolucoes', component: Devolucoes },
];
