import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories: Array<any>;

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.histories=this.api.getHistories();
  }

}
