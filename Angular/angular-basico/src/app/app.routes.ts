import { Routes } from '@angular/router';
import { Componente11Component } from './paginas/componente11/componente11.component';
import { ProjetofinalComponent } from './paginas/projetofinal/projetofinal.component';
import { PaginaErrorComponent } from './paginas/pagina-error/pagina-error.component';

import { rotaGuard } from './autenticacao/rota.guard';

export const routes: Routes = [
  {
    path : 'componente11', component : Componente11Component
  },
  {
    path : 'projeto-final', component : ProjetofinalComponent, canActivate : [rotaGuard]
  },
  {
    path : '', redirectTo : './componente11', pathMatch : 'full'
  },
  {
    path : '**', component : PaginaErrorComponent
  }
];
