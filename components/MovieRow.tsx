"use client";

import { useState } from "react";
import MovieModal from "./MovieModal";
import { UIMovie } from "@/types/movie";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }: { title: string; movies: UIMovie[] }) {
  const [selected, setSelected] = useState<UIMovie | null>(null);

  return (
    <section className="my-8 mx-5">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-40 cursor-pointer flex-shrink-0"
            onClick={() => setSelected(movie)}
          >
            <MovieCard movie={movie}/>
          </div>
        ))}
      </div>

      {selected && (
        <MovieModal movie={selected} isOpen={true} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

