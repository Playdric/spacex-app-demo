import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';
import { LaunchService } from '../services/launch.service';
import { Launch } from '../Models/launch.model';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  launch: Launch;
  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private launchService: LaunchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.launchService.getLastestLaunch().subscribe(data=> {
        this.launch = data;
      });
    });

    
  };
}
