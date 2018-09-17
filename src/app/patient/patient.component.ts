import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  paciente:object;
  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.paciente=this.api.getPatients();
   }
  
}
