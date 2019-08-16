import { TestBed } from '@angular/core/testing';

import { WisheService } from './wishe.service';

describe('WisheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WisheService = TestBed.get(WisheService);
    expect(service).toBeTruthy();
  });
});
