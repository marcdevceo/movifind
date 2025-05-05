export const dynamic = "force-dynamic";

import { fetchTMDBMovies } from "@/lib/fetchTMDBMovies";
import MovieRow from "@/components/MovieRow";
import { UIMovie } from "@/types/movie";
import BackButton from "@/components/BackButton";

export default async function SearchPage(props: {
    searchParams?: { q?: string };
  }) {
    const query = props.searchParams?.q || "";

  let results: UIMovie[] = [];

  if (query) {
    results = await fetchTMDBMovies("/search/movie", {
      query,
    });
  }

  return (
    <div className="p-6 text-white">
        <div className="flex justify-end mb-5">
            <BackButton
                route="/"
                buttonName="Back to Home"
            />
        </div>
      <h2 className="text-2xl font-bold mb-4">
        {query ? `Search results for "${query}"` : "No search term provided."}
      </h2>

      {results.length > 0 ? (
        <MovieRow title="Results" movies={results} />
      ) : (
        <p className="text-gray-400">No movies found.</p>
      )}
    </div>
  );
}
