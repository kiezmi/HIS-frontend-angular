import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Array<User>;
  
  constructor(private api: ApiServiceService) {
    this.patients = api.getPatients();
   }

  ngOnInit() {
  }

}
