import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-certificate-registration',
  templateUrl: './certificate-registration.component.html',
  styleUrls: ['./certificate-registration.component.scss']
})
export class CertificateRegistrationComponent implements OnInit {
  success = false;
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }
  register() {
    this.apiService.CreateRegistration({
      address: 'mnp street',
      centerName: 'ABCD Center',
      email: 'ssr.vg3@gmail.com',
      name: 'shivansh singh raghuvanshi',
      phoneNumber: '1234567891',
      certificationName: 'ABCEDE',
      id: '1'
    }).then(() => {
      this.success = true;
    }).catch((e) => {
      this.success = false;
      console.log(e);
    });
  }
}
