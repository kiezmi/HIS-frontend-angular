import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "../api-service.service";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.css"]
})
export class PatientComponent implements OnInit {
  paciente: any = {};
  constructor(private api: ApiServiceService, private route: ActivatedRoute, private location: Location) {
    route.params.subscribe(params => {
      let id = params.uid;
      this.paciente = this.api.getPatient(id);
    });
  }

  ngOnInit() {}
  
  goBack() {
    this.location.back();
  }
}
