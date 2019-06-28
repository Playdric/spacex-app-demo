import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { History } from '../Models/history.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  history: History[];
  observableHistory: Observable<History[]>;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    setTimeout(() => {
      this.observableHistory = this.historyService.getHistory();
    },
      2000);
  }

  buttonClick(id: string) {
    console.log(id);
  }


}
