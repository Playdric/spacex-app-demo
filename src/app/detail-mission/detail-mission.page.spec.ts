import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMissionPage } from './detail-mission.page';

describe('DetailMissionPage', () => {
  let component: DetailMissionPage;
  let fixture: ComponentFixture<DetailMissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
