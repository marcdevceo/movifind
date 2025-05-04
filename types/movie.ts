export interface MovieMDB {
  id: string;
  primaryImage?: {
    url: string;
  };
  originalTitleText?: {
    text: string;
  };
}

export interface YTSMovie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  medium_cover_image: string;
  background_image: string;
  yt_trailer_code: string;
}


export interface UIMovie {
  id: string;
  title: string;
  poster: string;
  rating?: number;
  genres?: string[];
  year?: number;
  backdrop?: string;
}

