import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipDetailsPage } from './spaceship-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceshipDetailsPageRoutingModule {}
