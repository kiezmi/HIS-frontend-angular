import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "../api-service.service";
import { History } from "../models/history.interface";
import { Location } from "@angular/common";

@Component({
  selector: "app-histories",
  templateUrl: "./histories.component.html",
  styleUrls: ["./histories.component.css"]
})
export class HistoriesComponent implements OnInit {
  histories: Array<History>;

  constructor(private api: ApiServiceService, private location: Location) {
    //this.histories = api.getHistories();

    this.histories = api.getHistories().map(history => ({
      ...history,
      nombrePaciente: api.getNameFromUid(history.userId),
      nombreDoctor: api.getNameFromUid(history.doctorId)
    }));
  }

  ngOnInit() {}
  
  goBack() {
    this.location.back();
  }
}
