import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandpadService } from '../services/landpad.service';
import { Landpad } from '../Models/landpad.model';
@Component({
  selector: 'app-detail-landpads',
  templateUrl: './detail-landpads.page.html',
  styleUrls: ['./detail-landpads.page.scss'],
})
export class DetailLandpadsPage implements OnInit {
  landpad: Landpad;
  constructor(private route: ActivatedRoute, private landpadService: LandpadService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.landpadService.getOneLandpad(params.get('landpadId')).subscribe(data=> {
        this.landpad = data;
      });
      console.log("mission : ", this.landpad);
    });

    
  };

}
