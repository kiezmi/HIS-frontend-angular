import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './models/user.interface'
import { History } from './models/history.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  users: Array<User> = JSON.parse(localStorage.getItem('users')) || [
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
    { id: '1', userId: "100", doctorId: "010", log: ["12/2/1999 Rotura de ligamento anterior"] },
    { id: '2', userId: "100", doctorId: "020", log: ["12/2/1978 Rotura de ligamento "] },
    { id: '3', userId: "200", doctorId: "020", log: ["12/2/2000 Rotura de ligamento anterior"] },
    { id: '4', userId: "200", doctorId: "010", log: ["12/2/2001 Rotura de ligamento "] },
    { id: '5', userId: "300", doctorId: "030", log: ["12/2/2002 Rotura de ligamento anterior"] },
    { id: '6', userId: "300", doctorId: "010", log: ["12/2/2005 Rotura de ligamento "] },
    { id: '7', userId: "300", doctorId: "020", log: ["12/2/2014 Rotura de ligamento anterior"] }
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
  saveData() {
    localStorage.setItem('users', JSON.stringify(this.users))
    // localStorage.setItem('historiales', JSON.stringify(this.historiales))
  }

  registro(role, uid, name, surname, dni, username, password) {
    this.users.push(
      { role, uid, name, surname, dni, username, password }
      
    );
    console.log(this.users);
    this.saveData();
  }

  getPatients() {
    const patinentsArray = this.users.filter(pacientes => pacientes.role === 'patient');
    return patinentsArray;
  }

  getPatient(id) {
    const paciente = this.users.find(pacientes => pacientes.uid === id);
    return paciente;
  }

  getDoctors() {
    const doctorsArray = this.users.filter(doctores => doctores.role === 'doctor');
    return doctorsArray;
  }

  getHistories() {
    const historiesArray = this.historiales;
    return historiesArray;
  }
  getHistoriesFromPatient(uid) {
    const historiesArray = this.historiales.filter(item => item.userId === uid);
    return historiesArray;
  }

  getNameFromUid(uid) {
    let res = this.users.find(user => user.uid === uid)
    return res && res.name;
  }

}



