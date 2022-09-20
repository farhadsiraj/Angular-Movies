import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieData, MovieImages, MovieReviewData, MovieVideoData } from '../models/movie';
import { switchMap, of } from 'rxjs';
import { ShowData } from '../models/show';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '7c6325b67799141922a87ac1bdcfc082';

  constructor(private http: HttpClient) {}

  /* .pipe() and of() is part of the rxjs library
      .pipe() lets you change the shape of an Observable
      of() lets you change something into an Observable
  */
  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieData>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovieDetails(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoData>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.backdrops.concat(res.posters));
      })
    );
  }

  getMovieReviews(id: string) {
    return this.http.get<MovieReviewData>(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  searchMovies(page: number) {
    return this.http.get<MovieData>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getShows(type: string = 'latest', count: number = 12) {
    return this.http.get<ShowData>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}
