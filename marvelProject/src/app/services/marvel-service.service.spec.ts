import { TestBed } from '@angular/core/testing';

import { MarvelServiceService } from './marvel-service.service';

describe('MarvelServiceService', () => {
  let service: MarvelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
