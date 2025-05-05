"use client";

import { useState, useEffect } from "react";
import { TMDBGenre } from "@/lib/fetchTMDBGenres";
import { UIMovie } from "@/types/movie";
import { fetchTMDBMovies } from "@/lib/fetchTMDBMovies";
import GenreFilter from "./GenreFilter";
import MovieRow from "./MovieRow";

interface Props {
  genres: TMDBGenre[];
}

export default function GenreSection({ genres }: Props) {
  const [selected, setSelected] = useState<TMDBGenre | null>(null);
  const [movies, setMovies] = useState<UIMovie[]>([]);

  useEffect(() => {
    async function getMovies() {
      if (!selected) return;
      const results = await fetchTMDBMovies("/discover/movie", {
        with_genres: selected.id.toString(),
        sort_by: "popularity.desc",
      });

      setMovies(results);
    }

    getMovies();
  }, [selected]);

  return (
    <section>
      <GenreFilter genres={genres} onSelect={setSelected} />

      {selected && (
        <MovieRow title={`Genre: ${selected.name}`} movies={movies} />
      )}
    </section>
  );
}
