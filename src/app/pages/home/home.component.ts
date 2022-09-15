import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  popularShows: Show[] = [];
  latestShows: Show[] = [];
  topRatedShows: Show[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });

    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });

    this.moviesService.getShows('popular').subscribe((shows) => {
      this.popularShows = shows;
    });

    this.moviesService.getShows('on_the_air').subscribe((shows) => {
      this.latestShows = shows;
    });

    this.moviesService.getShows('top_rated').subscribe((shows) => {
      this.topRatedShows = shows;
    });
  }
}
