import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { History } from '../models/history.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  histories: Array<History>;


  constructor(private api: ApiServiceService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      let id = params.uid
      this.histories = api.getHistoriesFromPatient(id);

    });
  }

  ngOnInit() { }

}
