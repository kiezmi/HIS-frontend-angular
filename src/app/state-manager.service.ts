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
    this.state.auth = user
  }

  
  isLogged() {

    return this.state.auth && this.state.auth.role
  }

}

