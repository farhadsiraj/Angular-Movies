export interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  // genres: Genre[];
}

export interface MovieData {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
