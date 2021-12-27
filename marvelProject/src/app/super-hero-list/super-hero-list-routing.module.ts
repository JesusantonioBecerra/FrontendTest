import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroListComponent } from './super-hero-list.component';

const routes: Routes = [
  {
    component: SuperHeroListComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SuperRouting {}
