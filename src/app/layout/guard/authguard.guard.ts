import { inject, Inject, } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthsrviceService } from '../service/authsrvice.service';






export const authguardGuard: CanActivateFn = (route, state) => {
   let _AuthsrviceService: AuthsrviceService = inject(AuthsrviceService)
   let router: Router = Inject(Router)

   if (typeof localStorage !== 'undefined') {

      if (localStorage.getItem('usertoken') != null) {
         _AuthsrviceService.userdecode()
      }
      else {
         router.navigate(['Login'])
         return false
      }
   }





   // *******************


   return true;
};
