import { TestBed } from '@angular/core/testing';

import { LandpadService } from './landpad.service';

describe('LandpadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandpadService = TestBed.get(LandpadService);
    expect(service).toBeTruthy();
  });
});
