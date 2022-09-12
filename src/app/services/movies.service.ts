import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movie';
import { switchMap, of } from 'rxjs';
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
  getMovies(type: string = 'upcoming') {
    return this.http.get<MovieData>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
}
