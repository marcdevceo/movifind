import { fetchTMDBMovies } from "@/lib/fetchTMDBMovies";
import MovieRow from "@/components/MovieRow";
import Navbar from "@/components/Navbar";


export default async function HomePage() {
  const popularMovies = await fetchTMDBMovies("/movie/popular");
  const topRRatedMovies = await fetchTMDBMovies("/movie/top_rated");

  return (
    <main className="bg-red-900 text-white min-h-screen">
      <div className="pt-24">
        <Navbar />
        <MovieRow title="Popular Movies" movies={popularMovies} />
        <MovieRow title="Top Rated Movies" movies={topRRatedMovies} />
      </div>
    </main>
  );
}


