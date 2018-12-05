import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { History } from '../models/history.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  histories: Array<History>;


  constructor(private api: ApiServiceService, private route: ActivatedRoute, private location: Location) {
    /*   route.params.subscribe(params => {
        let id = params.uid
        this.histories = api.getHistoriesFromPatient(id);
      }); */
    route.params.subscribe(params => {
      let id = params.uid
      this.histories = api.getHistoriesFromPatient(id).map((history) => ({
        ...history,
        nombrePaciente: api.getNameFromUid(history.userId),
        nombreDoctor: api.getNameFromUid(history.doctorId),
      }))
    });
  }
  ngOnInit() { }
  goBack(){
    this.location.back();
  }
}
