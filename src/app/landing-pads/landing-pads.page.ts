import { Component, OnInit } from '@angular/core';
import { LandpadService } from '../services/landpad.service';
import { Landpad } from '../Models/landpad.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-pads',
  templateUrl: './landing-pads.page.html',
  styleUrls: ['./landing-pads.page.scss'],
})
export class LandingPadsPage implements OnInit {
  landpads: Landpad[];
  observableLandpads: Observable<Landpad[]>;

  constructor(private landpadService: LandpadService) { }

  ngOnInit() {
    setTimeout(() => {
      this.observableLandpads = this.landpadService.getLandpads();
    },
      2000);
  }

}
