import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '7c6325b67799141922a87ac1bdcfc082';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get<MovieData>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
  }
}
