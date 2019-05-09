import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { About } from '../Models/about.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about: About;
  observableAbout: Observable<About>;

  constructor(private aboutService: AboutService) {
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.observableAbout = this.aboutService.getAbout();
    },
      2000);
  }

}
