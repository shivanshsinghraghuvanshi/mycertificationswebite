import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePlacehlderComponent } from './certificate-placehlder.component';

describe('CertificatePlacehlderComponent', () => {
  let component: CertificatePlacehlderComponent;
  let fixture: ComponentFixture<CertificatePlacehlderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatePlacehlderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatePlacehlderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
