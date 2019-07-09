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
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      { 
        path: 'history', 
        loadChildren: '../history/history.module#HistoryPageModule' 
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
        path: 'detail-mission/:missionId', 
        loadChildren: '../detail-mission/detail-mission.module#DetailMissionPageModule' 
      },
      { 
        path: 'detail-landpads/:landpadId', 
        loadChildren: '../detail-landpads/detail-landpads.module#DetailLandpadsPageModule' 
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
