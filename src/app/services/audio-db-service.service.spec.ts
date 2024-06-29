import { TestBed } from '@angular/core/testing';

import { AudioDbServiceService } from './audio-db-service.service';

describe('AudioDbServiceService', () => {
  let service: AudioDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
