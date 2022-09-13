import { Movie } from './movie';

export interface Show extends Movie {
  name: string;
}

export interface ShowData {
  page: number;
  results: Show[];
  total_results: number;
  total_pages: number;
}
