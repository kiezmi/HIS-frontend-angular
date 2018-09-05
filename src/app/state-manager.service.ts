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
    this.state.auth = { role: user.role}
    //this.state.auth = user;   /* usuario completo */
  }

  isLogged() {
    return this.state.auth && this.state.auth.role
  }
  logout() {
    this.state.auth = null;
  }

}

