import { TMDBMovie, TMDBVideo, UIMovie } from "@/types/movie";

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

export async function fetchFeaturedMovie(): Promise<UIMovie | null> {
  const results = await fetchTMDBMovies("/movie/now_playing");
  // const randomIndex = Math.floor(Math.random() * results.length);

  return results.length > 0 ? results[12] : null;
}

export async function fetchTMDBMovieVideos(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER}`,
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    console.error("TMDB trailer fetch error:", await res.text());
    return null;
  }

  const data = await res.json();

  const trailer = data.results?.find(
    (vid: TMDBVideo) =>
      vid.type === "Trailer" && vid.site === "YouTube"
  );

  return trailer?.key || null;
}
