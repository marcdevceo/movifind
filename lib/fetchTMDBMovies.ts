import { TMBDMovies, UIMovie } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTMDBMovies(path: string, params?: Record<string, string>): Promise<UIMovie[]> {
  const searchParams = new URLSearchParams({
    api_key: process.env.TMDB_API_KEY!,
    language: "en-US",
    ...params,
  });

  const url = `${BASE_URL}${path}?${searchParams.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("TMDB Error Response:", errorText);
    throw new Error("Failed to fetch TMDB movies");
  }

  const data = await res.json();

  return data.results.map((m: TMBDMovies) => ({
    id: m.id.toString(),
    title: m.title || m.name || "Untitled",
    poster: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
    backdrop: m.backdrop_path ? `https://image.tmdb.org/t/p/w780${m.backdrop_path}` : "",
    rating: m.vote_average,
    genres: m.genre_ids,
    year: m.release_date ? parseInt(m.release_date.split("-")[0]) : undefined,
  }));
}
