import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceshipDetailsPageRoutingModule } from './spaceship-details-routing.module';

import { SpaceshipDetailsPage } from './spaceship-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceshipDetailsPageRoutingModule
  ],
  declarations: [SpaceshipDetailsPage]
})
export class SpaceshipDetailsPageModule {}
