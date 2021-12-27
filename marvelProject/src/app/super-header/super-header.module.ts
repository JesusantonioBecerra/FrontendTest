import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeaderComponent } from './super-header.component';

@NgModule({
  declarations: [SuperHeaderComponent],
  imports: [CommonModule],
  exports: [SuperHeaderComponent],
})
export class SuperHeaderModule {}
