"use client";

import { useEffect, useState } from "react";
import { UIMovie } from "@/types/movie";
import { fetchTMDBMovieVideos } from "@/lib/fetchTMDBMovies";
import Image from "next/image";
import TrailerModal from "./TrailerModal";

export default function FeaturedBannerClient({ movie }: { movie: UIMovie }) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getTrailer() {
      const key = await fetchTMDBMovieVideos(movie.id);
      setTrailerKey(key);
    }
    getTrailer();
  }, [movie.id]);

  return (
    <section className="relative h-[35vh] w-full">
      <Image
        src={movie.backdrop || "/fallback-banner.jpg"}
        alt={movie.title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

      <div className="absolute bottom-12 left-8 max-w-2xl text-white">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-md">{movie.title}</h1>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {movie.overview || "No overview available."}
        </p>
        <div className="flex gap-3">
          <button className="bg-indigo-600 px-4 py-2 rounded font-medium hover:bg-indigo-700">
            View Details
          </button>
          {trailerKey && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-300"
            >
              ▶ Watch Trailer
            </button>
          )}
        </div>
      </div>

      {trailerKey && (
        <TrailerModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          youtubeKey={trailerKey}
        />
      )}
    </section>
  );
}
