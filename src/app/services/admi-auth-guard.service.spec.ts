import { TestBed, inject } from '@angular/core/testing';

import { AdmiAuthGuardService } from './admi-auth-guard.service';

describe('AdmiAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmiAuthGuardService]
    });
  });

  it('should be created', inject([AdmiAuthGuardService], (service: AdmiAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
