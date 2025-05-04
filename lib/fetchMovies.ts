import { UIMovie, MovieMDB } from "@/types/movie";

export async function fetchUpcomingMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
      },
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch popular movies');
    }
  
    const data = await res.json();
    return data.results;
  }

  export async function fetchMDBMoviesAsUI(): Promise<UIMovie[]> {
    const raw = await fetchUpcomingMovies();
  
    return raw.map((m: MovieMDB) => ({
      id: m.id,
      title: m.originalTitleText?.text || "Untitled",
      poster: m.primaryImage?.url || "",
      // MDB doesn't have rating/genres/year in the endpoint we're using
      rating: undefined,
      genres: [],
      year: undefined,
      backdrop: m.primaryImage?.url || "",
    }));
  }
  