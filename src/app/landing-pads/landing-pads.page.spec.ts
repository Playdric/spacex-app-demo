import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPadsPage } from './landing-pads.page';

describe('LandingPadsPage', () => {
  let component: LandingPadsPage;
  let fixture: ComponentFixture<LandingPadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
