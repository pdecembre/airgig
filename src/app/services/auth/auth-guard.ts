
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AuthService } from './auth.service';        

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authSvc: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authSvc.firebaseAuth.map((auth) => {
                if (!auth) {
                    this.router.navigateByUrl('login');
                    return false;
                }
                return true;
            }).take(1);
    }
}
