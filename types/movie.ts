export interface TMDBMovie {
  id: string;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
}


export interface UIMovie {
  id: string;
  title: string;
  poster: string;
  rating?: number;
  genres?: string[];
  year?: number;
  backdrop?: string;
  overview?: string;
}

export interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}