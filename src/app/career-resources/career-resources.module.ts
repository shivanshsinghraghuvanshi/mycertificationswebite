import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerResourcesRoutingModule } from './career-resources-routing.module';
import { CareerResourcesComponent } from './career-resources.component';


@NgModule({
  declarations: [CareerResourcesComponent],
  imports: [
    CommonModule,
    CareerResourcesRoutingModule
  ]
})
export class CareerResourcesModule { }
