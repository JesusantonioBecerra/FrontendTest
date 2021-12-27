import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroListComponent } from './super-hero-list.component';
import { SuperRouting } from './super-hero-list-routing.module';
import { SuperHeroCardModule } from '../super-hero-card/super-hero-card.module';


@NgModule({
  declarations: [SuperHeroListComponent],
  imports: [CommonModule, SuperRouting, SuperHeroCardModule],
  exports: [SuperHeroListComponent],
})
export class SuperHeroListModule {}
