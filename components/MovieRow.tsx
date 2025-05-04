import { UIMovie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  title: string;
  movies: UIMovie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="mb-8 mx-10">
      <h2 className="text-xl font-bold mb-2 px-2">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 px-2 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
