import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../modules/components/components.module';
import { LandingPadsPage } from './landing-pads.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPadsPage
  },
  { 
    path: 'detail-landpads/:landpadId', 
    loadChildren: '../detail-landpads/detail-landpads.module#DetailLandpadsPageModule' 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPadsPage]
})
export class LandingPadsPageModule {}
