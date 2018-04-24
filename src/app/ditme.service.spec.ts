import { TestBed, inject } from '@angular/core/testing';

import { DitmeService } from './ditme.service';

describe('DitmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DitmeService]
    });
  });

  it('should be created', inject([DitmeService], (service: DitmeService) => {
    expect(service).toBeTruthy();
  }));
});
