import { TestBed } from '@angular/core/testing';

import { LaunchService } from './launch.service';

describe('LaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchService = TestBed.get(LaunchService);
    expect(service).toBeTruthy();
  });
});
