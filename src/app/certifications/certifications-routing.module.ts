import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCertificatesComponent } from './all-certificates/all-certificates.component';
import { CertificatePlacehlderComponent } from './certificate-placehlder/certificate-placehlder.component';

import { CertificationsComponent } from './certifications.component';

const routes: Routes = [{
  path: '', component: CertificationsComponent, children: [
    { path: ':id', component: CertificatePlacehlderComponent },
    { path: '', component: AllCertificatesComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }
