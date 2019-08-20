import { TestBed } from '@angular/core/testing';

import { SearchmovieService } from './searchmovie.service';

describe('SearchmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchmovieService = TestBed.get(SearchmovieService);
    expect(service).toBeTruthy();
  });
});
