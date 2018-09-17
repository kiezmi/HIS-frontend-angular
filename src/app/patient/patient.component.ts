import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  paciente: object;
  constructor(private api: ApiServiceService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      let id = params.uid
      this.paciente = this.api.getPatient(id);
    });
  }

  ngOnInit() {

  }

}
