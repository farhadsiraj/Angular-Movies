import { TestBed } from '@angular/core/testing';

import { TvShowsService } from './tvshows.service';

describe('TvshowsService', () => {
  let service: TvShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
