import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  users = [
    { role: 'admin', uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0" },
    { role: 'patient', uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "100" },
    { role: 'doctor', uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "10" },
    { role: 'technical', uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "1" }
  ];

  constructor(private stateManager: StateManagerService) { }
  login(user, pass) {
    // logic
    const userObject = this.users.find(validar => validar.username === user && validar.password === pass)
    console.log(userObject);
    if (userObject){this.stateManager.login(userObject);

    }
    
    return userObject;

  }
}



