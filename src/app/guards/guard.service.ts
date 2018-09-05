import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private stateManager: StateManagerService, private router: Router) {

    }
    canActivate() {
        let logged = this.stateManager.isLogged();
        if (!logged) {
            this.router.navigate(['login']);
        }
        return !!logged;

    };

}
