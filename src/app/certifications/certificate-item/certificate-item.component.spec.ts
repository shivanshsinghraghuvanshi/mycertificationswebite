import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateItemComponent } from './certificate-item.component';

describe('CertificateItemComponent', () => {
  let component: CertificateItemComponent;
  let fixture: ComponentFixture<CertificateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
