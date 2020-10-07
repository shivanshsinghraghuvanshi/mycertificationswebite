import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications.component';


@NgModule({
  declarations: [CertificationsComponent],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }
