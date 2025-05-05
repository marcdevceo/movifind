"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { UIMovie } from "@/types/movie";

import { useState, useEffect } from "react";
import { fetchTMDBMovieVideos } from "@/lib/fetchTMDBMovies";
import TrailerModal from "./TrailerModal";

interface Props {
  movie: UIMovie;
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: Props) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    async function getTrailer() {
      const key = await fetchTMDBMovieVideos(movie.id);
      setTrailerKey(key);
    }

    getTrailer();
  }, [movie.id]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Dialog panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-zinc-900 rounded-lg max-w-3xl w-full overflow-hidden">
          {/* Close Button */}
          <div className="text-right p-2">
            <button onClick={onClose} className="text-white hover:text-red-400">
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row p-4 gap-4">
            <Image
              src={movie.poster || "/fallback.png"}
              alt={movie.title}
              width={250}
              height={375}
              className="rounded-md"
            />
            <div>
              <div className="text-white flex-1">
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  {movie.year} • ⭐ {movie.rating}
                </p>
              </div>
              {trailerKey && (
                <button
                  onClick={() => setIsTrailerOpen(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  ▶ Watch Trailer
                </button>
              )}

              {trailerKey && (
                <TrailerModal
                  isOpen={isTrailerOpen}
                  onClose={() => setIsTrailerOpen(false)}
                  youtubeKey={trailerKey}
                />
              )}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
