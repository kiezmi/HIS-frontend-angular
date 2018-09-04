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
  logging: boolean = false;
  error = false;

  login(): void {
    let result = this.api.login(this.user, this.pass)
    this.router.navigate(['dashboard'])
  }

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() { }

}
