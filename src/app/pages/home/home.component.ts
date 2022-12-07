import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/item/item';
import { mapTvShowToItem, TvShow } from 'src/app/models/show';
import { mapMovieToItem, Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvShowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];

  popularShows: Item[] = [];
  latestShows: Item[] = [];
  topRatedShows: Item[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.map((movie) => mapMovieToItem(movie));
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies.map((movie) => mapMovieToItem(movie));
    });

    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.map((movie) => mapMovieToItem(movie));
    });

    this.moviesService.getShows('popular').subscribe((shows) => {
      this.popularShows = shows.map((tvshow) => mapTvShowToItem(tvshow));
    });

    this.moviesService.getShows('on_the_air').subscribe((shows) => {
      this.latestShows = shows.map((tvshow) => mapTvShowToItem(tvshow));
    });

    this.moviesService.getShows('top_rated').subscribe((shows) => {
      this.topRatedShows = shows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }
}
