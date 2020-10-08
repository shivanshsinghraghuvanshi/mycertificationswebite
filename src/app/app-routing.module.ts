import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateRegistrationComponent } from './commons/certificate-registration/certificate-registration.component';
import { LoginComponent } from './commons/login/login.component';
import { MainComponent } from './commons/main/main.component';
import { AuthGuard } from './commons/services/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'certificate-registration', component: CertificateRegistrationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'certifications', loadChildren: () => import('./certifications/certifications.module').then(m => m.CertificationsModule) },
  { path: 'schools', loadChildren: () => import('./schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'employers', loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule) },
  { path: 'career-resources', loadChildren: () => import('./career-resources/career-resources.module').then(m => m.CareerResourcesModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
