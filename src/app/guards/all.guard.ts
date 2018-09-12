import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AllGuard implements CanActivate {

  constructor(private stateManager: StateManagerService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot) {

    var roll = this.stateManager.getRole();
    var uid = this.stateManager.getUid();
    var route = next.routeConfig.path;
    var paramUid = next.params.uid;
    console.log(uid, paramUid);
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
        if (route === 'patients' || route === 'patient/:uid' || route === 'histories' || route === 'history/:uid') {
          return true;
        } else {
          return false;
        }

      case 'patient':
        if (paramUid === uid && (route === 'patient/:uid' || route === 'history/:uid')) {
          return true;
        } else {
          return false;
        }

      default:
        return false;

    }

  }
}
