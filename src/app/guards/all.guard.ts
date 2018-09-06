import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AllGuard implements CanActivate {

  constructor(private stateManager: StateManagerService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot) {

    var roll = this.stateManager.getRole();
    var route = next.routeConfig.path;

    switch (roll) {
      case 'admin':
        return true;

      case 'doctor':
        if (route === 'dashboard') {
          return true;
        } else {
          return false;
        }

      default:
        break;
    }

  }
}
