import { TMDBMovie, UIMovie } from "@/types/movie";

export async function fetchTMDBMovies(
  path: string,
  params?: Record<string, string>
): Promise<UIMovie[]> {
  const searchParams = new URLSearchParams({
    language: "en-US",
    ...params,
  });

  const url = `https://api.themoviedb.org/3${path}?${searchParams.toString()}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER}`,
      Accept: "application/json",
    },
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error("TMDB Error Response:", errorText);
    throw new Error("Failed to fetch TMDB movies");
  }

  const data = await res.json();

  if (!data.results || !Array.isArray(data.results)) {
    return [];
  }

  return data.results.map((m: TMDBMovie) => ({
    id: m.id.toString(),
    title: m.title || "Untitled",
    poster: m.poster_path
      ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
      : "",
    backdrop: m.backdrop_path
      ? `https://image.tmdb.org/t/p/w780${m.backdrop_path}`
      : "",
    rating: m.vote_average,
    genres: m.genre_ids,
    year: m.release_date ? parseInt(m.release_date.split("-")[0]) : undefined,
  }));
}

