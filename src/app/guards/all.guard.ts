import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AllGuard implements CanActivate {

  constructor(private stateManager: StateManagerService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot) {

    var roll = this.stateManager.getRole();
    var uid = this.stateManager.getUide();
    var route = next.routeConfig.path;
    
    switch (roll) {
      case 'admin':
        return true;

      case 'technical':
        if (route === 'createUser') {
          return true;
        } else {
          return false;
        }

      case 'doctor':
        if (route === 'patients' || route === 'patient/:id' || route === 'histories' || route === 'history/:id') {
          return true;
        } else {
          return false;
        }

      case 'patient':
        if ((route === 'patient/:id' && uid === next.params.id) || (route === 'history/:id' && uid === next.params.id)) {
          return true;
        } else {
          return false;
        }

      default:
        return false;

    }

  }
}
