import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './models/user.interface'
import { History } from './models/history.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  users: Array<User> = [
    { role: 'admin', uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0" },
    { role: 'patient', uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "100" },
    { role: 'patient', uid: "200", name: "Juanito", surname: "Lopez", dni: "123456789Y", username: "Lito", password: "200" },
    { role: 'patient', uid: "300", name: "Sergio", surname: "Zaragoza", dni: "123456789Y", username: "Sergio", password: "300" },
    { role: 'doctor', uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "10" },
    { role: 'doctor', uid: "020", name: "Cristianito", surname: "Martinez", dni: "123456789P", username: "Cris", password: "20" },
    { role: 'doctor', uid: "030", name: "Ivan", surname: "Martinez", dni: "123456789P", username: "Ivan", password: "30" },
    { role: 'technical', uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "1" },
    { role: 'technical', uid: "001", name: "Javo", surname: "Guerra", dni: "123456789W", username: "Javo", password: "2" }
  ];

  historiales: Array<History> = [
    { userId: "100", doctorId: "10", log: ["12/2/1999 Rotura de ligamento anterior"] },
    { userId: "100", doctorId: "20", log: ["12/2/1978 Rotura de ligamento anterior"] },
    { userId: "200", doctorId: "20", log: ["12/2/2000 Rotura de ligamento anterior"] },
    { userId: "200", doctorId: "10", log: ["12/2/2001 Rotura de ligamento anterior"] },
    { userId: "300", doctorId: "30", log: ["12/2/2002 Rotura de ligamento anterior"] },
    { userId: "300", doctorId: "10", log: ["12/2/2005 Rotura de ligamento anterior"] },
    { userId: "300", doctorId: "20", log: ["12/2/2014 Rotura de ligamento anterior"] }
  ];

  constructor(private stateManager: StateManagerService) { }
  login(user, pass) {
    // logic
    const userObject = this.users.find(validar => validar.username === user && validar.password === pass)

    if (userObject) {
      this.stateManager.login(userObject)
      return userObject;
    }
    console.log(userObject);

  }

  registro(role, uid, name, surname, dni, username, pass) {
    const newUser = this.users.push();
  }

  getPatients() {
    const patinentsArray = this.users.filter(pacientes => pacientes.role === 'patient');
    return patinentsArray;
  }

  getHistories() {
    const historiesArray = this.historiales;
    return historiesArray;
  }

}



