import { fetchMDBMoviesAsUI } from "@/lib/fetchMovies";
import { fetchYTSMovies } from "@/lib/fetchYTSMovies";
import MovieRow from "@/components/MovieRow";
import Navbar from "@/components/Navbar";


export default async function HomePage() {
  const upcoming = await fetchMDBMoviesAsUI();
  const topRated = await fetchYTSMovies();

  return (
    <main className="bg-red-900 text-white min-h-screen">
      <div className="pt-24">
        <Navbar />
        <MovieRow title="Upcoming Movies" movies={upcoming} />
        <MovieRow title="Top Rated Movies" movies={topRated} />
      </div>
    </main>
  );
}


