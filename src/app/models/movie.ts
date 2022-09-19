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
  genres: Genre[];
}

export interface MovieData {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoData {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface MovieReviewData {
  id: number;
  results: MovieReview[];
  page: number;
  total_results: number;
  total_pages: number;
}

export interface MovieReview {
  author: string;
  author_details: ReviewAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface ReviewAuthorDetails {
  name: string;
  username: string;
  avatar: string;
  rating: number;
}
// export const mapMovieToItem = (movie: Movie): Item => {
//   return {
//     id: movie.id,
//     title: movie.title,
//     poster_path: movie.poster_path,
//     vote_average: movie.vote_average,
//     backdrop_path: movie.backdrop_path,
//     vote_count: movie.vote_count,
//     release_date: movie.release_date,
//     overview: movie.overview,
//     routePath: '/movie/' + movie.id
//   };
// };
