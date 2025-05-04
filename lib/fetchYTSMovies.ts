import { UIMovie, YTSMovie } from "@/types/movie";

  export async function fetchYTSMovies(limit = 20, sort_by = "rating"): Promise<UIMovie[]> {
    const url = `https://yts.mx/api/v2/list_movies.json?limit=${limit}&sort_by=${sort_by}`;
  
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error("Failed to fetch YTS movies");
    }
  
    const data = await res.json();
    const movies = data?.data?.movies || [];
  
    if (!data?.data?.movies) return [];
  
    return movies.map((m: YTSMovie) => ({
        id: m.id.toString(),
        title: m.title,
        poster: m.medium_cover_image,
        rating: m.rating,
        genres: m.genres,
        year: m.year,
        backdrop: m.background_image,
      }));
  }
  