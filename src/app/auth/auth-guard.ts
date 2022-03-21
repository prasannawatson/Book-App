import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // redirecting to login page when dashboard Url directly entered
    if (sessionStorage.getItem('userInfo') != null){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}