import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroCardComponent } from './super-hero-card.component';

@NgModule({
  declarations: [SuperHeroCardComponent],
  imports: [CommonModule],
  exports: [SuperHeroCardComponent],
})
export class SuperHeroCardModule {}
