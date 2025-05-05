import { UIMovie } from "@/types/movie";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: UIMovie }) {
  const imageUrl = movie?.poster;

  return (
    <div className="flex flex-col justify-between p-2 rounded shadow-xl hover:scale-105 transition-transform duration-200">
      <div className="w-full aspect-[2/3] bg-zinc-700 rounded overflow-hidden">
        {imageUrl ? (
                     <Image
                       src={movie.poster || "/fallback.png"}
                       alt={movie.title}
                       width={160}
                       height={240}
                       className="rounded-md w-full"
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
