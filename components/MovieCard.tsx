import { UIMovie } from "@/types/movie";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: UIMovie }) {
  const imageUrl = movie?.poster;

  return (
    <div className="min-w-[250px] max-w-[200px] flex flex-col justify-between bg-zinc-800 p-2 rounded shadow-xl hover:scale-105 transition-transform duration-200">
      <div className="w-full aspect-[2/3] bg-zinc-700 rounded overflow-hidden">
        {imageUrl ? (
          <Image
            src={movie.poster}
            alt={movie.title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-zinc-700 flex items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>
      <div>
        <h2 className="mt-2 text-sm font-medium text-white text-center">
          {movie.title}
        </h2>
      </div>
    </div>
  );
}
