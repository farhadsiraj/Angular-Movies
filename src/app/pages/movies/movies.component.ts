import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  // CREATE VARIABLE TO HOLD TOTAL NUMBER OF MOVIES RETURNED FROM SEARCH TO FIX BUG WITH TOTAL NUMBER OF PAGES

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getMoviesPage(1);
      }
    });
  }

  getMoviesPage(page: number, searchValue?: string) {
    this.movieService.searchMovies(page, searchValue).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.movieService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else if (this.searchValue) {
      this.getMoviesPage(pageNumber, this.searchValue);
    } else {
      this.getMoviesPage(pageNumber);
    }
  }

  searchEvent() {
    if (this.searchValue) {
      this.getMoviesPage(1, this.searchValue);
    }
  }
}
