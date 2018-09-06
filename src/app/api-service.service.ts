import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './models/user.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  users: Array<User> = [
    { role: 'admin', uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0" },
    { role: 'patient', uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "100" },
    { role: 'patient', uid: "200", name: "Juanito", surname: "Lopez", dni: "123456789Y", username: "Lito", password: "200" },
    { role: 'doctor', uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "10" },
    { role: 'doctor', uid: "010", name: "Cristianito", surname: "Martinez", dni: "123456789P", username: "Cris", password: "20" },
    { role: 'technical', uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "1" },
    { role: 'technical', uid: "001", name: "Javo", surname: "Guerra", dni: "123456789W", username: "Javo", password: "2" }
  ];

  constructor(private stateManager: StateManagerService) { }
  login(user, pass) {
    // logic
    const userObject = this.users.find(validar => validar.username === user && validar.password === pass)

    if (userObject) {
      this.stateManager.login(userObject)
    }
    console.log(userObject);
    return userObject;
  }

  
}



