import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieReview, MovieVideo, MovieImages, MovieImage, MovieCredits } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import ISO6391 from 'iso-639-1';
import { first } from 'rxjs';

@Component({
  selector: 'movie',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImage[] = [];
  movieCredits: MovieCredits | null = null;
  // movieCredits: MovieCredits[] = [];
  director: string = '';
  movieReviews: MovieReview[] = [];
  imageSizes = IMAGE_SIZES;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieReviews(id);
    });
  }
  ngOnDestroy(): void {}

  getMovie(id: string) {
    this.moviesService.getMovieDetails(id).subscribe((movieData) => {
      this.movie = movieData;
      this.movie.original_language = ISO6391.getName(this.movie.original_language);
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
      let director: { name: string }[] = this.movieCredits.crew.filter((person) => person.job === 'Director');
      this.director = director[0].name;
    });
  }

  getMovieReviews(id: string) {
    this.moviesService.getMovieReviews(id).subscribe((movieReviewData) => {
      this.movieReviews = movieReviewData;
    });
  }
}
