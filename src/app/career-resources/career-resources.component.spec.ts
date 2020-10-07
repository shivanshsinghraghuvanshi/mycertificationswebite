import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerResourcesComponent } from './career-resources.component';

describe('CareerResourcesComponent', () => {
  let component: CareerResourcesComponent;
  let fixture: ComponentFixture<CareerResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
