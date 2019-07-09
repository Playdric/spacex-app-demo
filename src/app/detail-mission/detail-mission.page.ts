import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionsService } from '../services/missions.service';
import { Mission } from '../Models/missions.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.page.html',
  styleUrls: ['./detail-mission.page.scss'],
})
export class DetailMissionPage implements OnInit {
  mission: Mission;
  constructor(private route: ActivatedRoute, private missionService: MissionsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.missionService.getOneMission(params.get('missionId')).subscribe(data=> {
        this.mission = data;
      });
      console.log("mission : ", this.mission);
    });

    
  };

}
