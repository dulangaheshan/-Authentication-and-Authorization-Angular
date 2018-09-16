import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(protected router: Router, protected authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
