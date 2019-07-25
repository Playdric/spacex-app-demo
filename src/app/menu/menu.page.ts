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
      title: 'History',
      url: '/menu/history'
    },
    {
      title: 'Missions',
      url: '/menu/missions'
    },
    {
      title: 'Capsules',
      url: '/menu/capsules'
    },
    {
      title: 'Landing-Pads',
      url: '/menu/landing-pads'
    },
    {
      title: 'About',
      url: '/menu/about'
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
