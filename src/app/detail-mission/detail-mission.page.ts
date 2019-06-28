import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.page.html',
  styleUrls: ['./detail-mission.page.scss'],
})
export class DetailMissionPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('missionId'));
    }
    );
  };

}
