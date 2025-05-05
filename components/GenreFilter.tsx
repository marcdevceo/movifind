"use client";

import { TMDBGenre } from "@/lib/fetchTMDBGenres";

interface GenreFilterProps {
  genres: TMDBGenre[];
  onSelect: (genre: TMDBGenre) => void;
}


export default function GenreFilter({ genres, onSelect }: GenreFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-2 py-4 mb-5 scrollbar-hide">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre)}
          className="bg-indigo-900 hover:bg-indigo-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
