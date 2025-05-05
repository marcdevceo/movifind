export interface TMDBGenre {
  id: number;
  name: string;
}


export async function fetchTMDBGenres(): Promise<TMDBGenre[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await res.json();
  return data.genres;
}
