import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  const rota = new Router;

  if(localStorage.getItem('nome') === 'Jonas'){
    return true;
  }else{
    rota.navigateByUrl('/componente11');
    return false;
  }
};
