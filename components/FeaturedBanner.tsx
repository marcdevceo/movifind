import { fetchFeaturedMovie } from "@/lib/fetchTMDBMovies";
import FeaturedBannerClient from "./FeaturedBannerClient";

export default async function FeaturedBanner() {
  const movie = await fetchFeaturedMovie();
  if (!movie) return null;

  return <FeaturedBannerClient movie={movie} />;
}


