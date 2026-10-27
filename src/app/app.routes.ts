import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Alunos } from './alunos/alunos';
import { Cursos } from './cursos/cursos';
import { Notas } from './notas/notas';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'alunos', component: Alunos },
  { path: 'cursos', component: Cursos },
  { path: 'notas', component: Notas },
  { path: '**', redirectTo: '' }
];
