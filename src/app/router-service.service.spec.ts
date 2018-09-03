import { TestBed, inject } from '@angular/core/testing';

import { RouterServiceService } from './router-service.service';

describe('RouterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterServiceService]
    });
  });

  it('should be created', inject([RouterServiceService], (service: RouterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
