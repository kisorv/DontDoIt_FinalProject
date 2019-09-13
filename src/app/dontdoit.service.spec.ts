import { TestBed } from '@angular/core/testing';

import { DontdoitService } from './dontdoit.service';

describe('DontdoitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DontdoitService = TestBed.get(DontdoitService);
    expect(service).toBeTruthy();
  });
});
