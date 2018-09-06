import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: null,
  }

  constructor() { }

  login(user) {
    this.state.auth = {
      role: user.role,
      uide: user.uid,
    }
    //this.state.auth = user;   /* usuario completo */
  }

  isLogged() {
    return this.state.auth
  }
  logout() {
    this.state.auth = null;
  }

  getRole(){
    return this.state.auth.role;
  }

  getUide(){
    return this.state.auth.uide;
  }
}

