import { Item } from '../components/item/item';
import { Genre } from './genre';

export interface TvShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
  origin_country: string[];
  number_of_episodes: number;
  number_of_seasons: number;
  tagline: string;
  episode_run_time: number[];
}

export interface ShowData {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShowVideoData {
  id: number;
  results: TvShowVideo[];
}

export interface TvShowVideo {
  site: string;
  key: string;
}

export interface TvShowImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface TvShowCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface ShowReviewData {
  id: number;
  results: ShowReview[];
  page: number;
  total_results: number;
  total_pages: number;
}

export interface ShowReview {
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

export const mapTvShowToItem = (tvShow: TvShow): Item => {
  return {
    id: tvShow.id,
    title: tvShow.name,
    poster_path: tvShow.poster_path,
    vote_average: tvShow.vote_average,
    backdrop_path: tvShow.backdrop_path,
    vote_count: tvShow.vote_count,
    release_date: tvShow.first_air_date,
    overview: tvShow.overview,
    routePath: '/tvshow/' + tvShow.id,
    tagline: tvShow.tagline
  };
};
