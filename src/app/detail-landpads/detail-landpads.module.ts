import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailLandpadsPage } from './detail-landpads.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLandpadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailLandpadsPage]
})
export class DetailLandpadsPageModule {}
