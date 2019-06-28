import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'

      },
      {
        path: 'first',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      {
        path: 'landing-pads',
        loadChildren: '../landing-pads/landing-pads.module#LandingPadsPageModule'
      },
      {
        path: 'missions',
        loadChildren: '../missions/missions.module#MissionsPageModule'
      },
      { 
        path: 'history', 
        loadChildren: '../history/history.module#HistoryPageModule' 
      },
      { 
        path: 'detail-mission/:missionId', 
        loadChildren: '../detail-mission/detail-mission.module#DetailMissionPageModule' 
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
