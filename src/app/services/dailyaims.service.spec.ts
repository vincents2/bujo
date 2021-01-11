import { TestBed } from '@angular/core/testing';

import { DailyaimsService } from './dailyaims.service';

describe('DailyaimsService', () => {
  let service: DailyaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
