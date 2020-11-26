import { TestBed } from '@angular/core/testing';

import { ColourSwapServiceService } from './colour-swap-service.service';

describe('ColourSwapServiceService', () => {
  let service: ColourSwapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourSwapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
