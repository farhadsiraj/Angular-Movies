import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Item } from 'src/app/components/item/item';
import { mapTvShowToItem, TvShow } from 'src/app/models/show';
import { TvShowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: Item[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private tvShowsService: TvShowsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }

  getPagedTvShows(page: number, searchKeyword?: string) {
    this.tvShowsService.searchTvShows(page, searchKeyword).subscribe((tvShows) => {
      this.tvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowsByGenre(genreId, page).subscribe((tvShows) => {
      this.tvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }

  resetSearch() {
    this.searchValue = ''
    this.getPagedTvShows(1)
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvShows(pageNumber, this.searchValue);
      } else {
        this.getPagedTvShows(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
    }
  }
}

