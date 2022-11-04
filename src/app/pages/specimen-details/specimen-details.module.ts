import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecimenDetailsPageRoutingModule } from './specimen-details-routing.module';

import { SpecimenDetailsPage } from './specimen-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecimenDetailsPageRoutingModule
  ],
  declarations: [SpecimenDetailsPage]
})
export class SpecimenDetailsPageModule {}
