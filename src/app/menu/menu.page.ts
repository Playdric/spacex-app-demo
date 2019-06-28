import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;
  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'First Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'Second Page blank',
      url: '/menu/second'
    },
    {
      title: 'About',
      url: '/menu/about'
    },
    {
      title: 'Missions',
      url: '/menu/missions'
    }
  ];
  launches = [
    {
      title: 'Landing-Pads',
      url: '/menu/landing-pads'
    }
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {
  }

}
