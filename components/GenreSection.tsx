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
    <section className="mt-8">
      <GenreFilter genres={genres} onSelect={setSelected} />

      {selected && (
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-xl font-semibold">Genre: {selected.name}</h2>
          <button
            onClick={() => {
              setSelected(null);
              setMovies([]);
            }}
            className="text-sm text-zinc-900 hover:text-zinc-200 hover:bg-zinc-800 underline bg-zinc-300 rounded-lg p-2"
          >
            Clear Genre
          </button>
        </div>
      )}

      {selected && <MovieRow title={selected.name} movies={movies} />}
    </section>
  );
}
