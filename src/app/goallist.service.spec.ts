import { TestBed } from '@angular/core/testing';

import { GoallistService } from './goallist.service';

describe('GoallistService', () => {
  let service: GoallistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoallistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
