import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications.component';
import { CertificatePlacehlderComponent } from './certificate-placehlder/certificate-placehlder.component';
import { AllCertificatesComponent } from './all-certificates/all-certificates.component';
import { CertificateItemComponent } from './certificate-item/certificate-item.component';


@NgModule({
  declarations: [CertificationsComponent, CertificatePlacehlderComponent, AllCertificatesComponent, CertificateItemComponent],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }
