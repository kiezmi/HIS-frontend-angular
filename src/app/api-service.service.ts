import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  user = [
    { role: 'admin', uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K" },
    { role: 'patient', uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J" },
    { role: 'doctor', uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M" },
    { role: 'technical', uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N" }
  ];

  constructor(private stateManager: StateManagerService) { }
  login(user, pass) {
    // logic
    return true
  }
}



