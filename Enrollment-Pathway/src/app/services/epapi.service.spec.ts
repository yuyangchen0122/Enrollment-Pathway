import { TestBed } from '@angular/core/testing';

import { EPApiService } from './epapi.service';

describe('EPApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EPApiService = TestBed.get(EPApiService);
    expect(service).toBeTruthy();
  });
});
