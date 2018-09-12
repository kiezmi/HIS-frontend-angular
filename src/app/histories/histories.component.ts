import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { History } from '../models/history.interface'

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  histories: Array<History>;
  constructor(private api: ApiServiceService) {
    this.histories = api.getHistories();
  }

  ngOnInit() {

  }

}
