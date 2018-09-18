import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  role: string;
  uid: number;
  name: string;
  surname: string;
  dni: number;
  username: string;
  pass: string;
  error = "";

  constructor(private api: ApiServiceService, private router: Router) { }

  registro(): void {
    this.api.registro(this.role, this.uid, this.name, this.surname, this.dni, this.username, this.pass)
    this.router.navigate(['dashboard']);
  }

  ngOnInit() { }

}
