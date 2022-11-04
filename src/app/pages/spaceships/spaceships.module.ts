import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceshipsPageRoutingModule } from './spaceships-routing.module';

import { SpaceshipsPage } from './spaceships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceshipsPageRoutingModule
  ],
  declarations: [SpaceshipsPage]
})
export class SpaceshipsPageModule {}
