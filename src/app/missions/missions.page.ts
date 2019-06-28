import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { Mission } from '../Models/missions.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  missions: Mission[];
  observableMissions: Observable<Mission[]>;

  constructor(private missionService: MissionsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.observableMissions = this.missionService.getMissions();
    },
      2000);
  }

}

