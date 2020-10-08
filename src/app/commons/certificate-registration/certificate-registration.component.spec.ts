import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRegistrationComponent } from './certificate-registration.component';

describe('CertificateRegistrationComponent', () => {
  let component: CertificateRegistrationComponent;
  let fixture: ComponentFixture<CertificateRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
