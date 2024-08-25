import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';

export const userGuard: CanActivateFn = (route, state) => {
  let userAuth = inject(UserAuthenService);
  let router = inject(Router);

  if (userAuth.isUserLogged) {
    return true;
  } else {
    alert('Please login first');
    router.navigate(['/UserLogin']);
    return false;
  }
};
