import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: null,
  }
  patients: Array<any>;

  constructor() { }

  login(user) {
    this.state.auth = {
      role: user.role,
      uid: user.uid,
    }
    //this.state.auth = user;   /* usuario completo */
  }
  getPatient() {
console.log("state get patientes");

  }

  isLogged() {
    return this.state.auth
  }
  logout() {
    this.state.auth = null;
  }

  getRole() {
    return this.state.auth.role;
  }

  getUid() {
    return this.state.auth.uid;
  }

}

