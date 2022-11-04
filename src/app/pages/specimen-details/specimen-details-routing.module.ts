import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecimenDetailsPage } from './specimen-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpecimenDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecimenDetailsPageRoutingModule {}
