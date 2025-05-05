import { fetchTMDBMovies } from "@/lib/fetchTMDBMovies";
import MovieRow from "@/components/MovieRow";
import Navbar from "@/components/Navbar";
import { fetchTMDBGenres } from "@/lib/fetchTMDBGenres";
import GenreSection from "@/components/GenreSection";
import FeaturedBanner from "@/components/FeaturedBanner";


export default async function HomePage() {
  const popularMovies = await fetchTMDBMovies("/movie/popular");
  const topRRatedMovies = await fetchTMDBMovies("/movie/top_rated");

  return (
    <main className="bg-red-900 text-white min-h-screen">
      <div className="pt-24">
        <Navbar />
        <GenreSection genres={genres} />
        <FeaturedBanner />
        <MovieRow title="Popular Movies" movies={popularMovies} />
        <MovieRow title="Top Rated Movies" movies={topRRatedMovies} />
      </div>
    </main>
  );
}

const genres = await fetchTMDBGenres();


