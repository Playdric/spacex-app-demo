import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLandpadsPage } from './detail-landpads.page';

describe('DetailLandpadsPage', () => {
  let component: DetailLandpadsPage;
  let fixture: ComponentFixture<DetailLandpadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLandpadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLandpadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
