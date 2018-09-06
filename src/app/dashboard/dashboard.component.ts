import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  miRole: string;
  miUid: string;
  constructor(private stateManager: StateManagerService, private router: Router) { }

  logout() {
    this.stateManager.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.miRole = this.stateManager.getRole();
    this.miUid = this.stateManager.getUid();
  }

}
