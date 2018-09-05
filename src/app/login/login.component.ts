import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  error = "";

  constructor(private api: ApiServiceService, private router: Router) { }

  login(): void {

    if (this.api.login(this.user, this.pass)) {
      this.user = "";
      this.pass = "";
      this.error = "";
      this.router.navigate(['dashboard']);
    } else {
      this.error = ("Introduzca su usuario y contraseña correctamente");
      this.router.navigate(['login']);
    }

  }



  ngOnInit() { }

}
