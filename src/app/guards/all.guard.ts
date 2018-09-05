import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllGuard implements CanActivate {

  constructor(private stateManager: StateManagerService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot) {

    switch (next.routeConfig.path) {
      case 'patients/:id':

        break;

      default:
        break;
    }
    return true;
  }
}
