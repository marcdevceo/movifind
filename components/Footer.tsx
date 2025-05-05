import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
      <p className="mb-2">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4"
      >
        <Image
          src="/tmdb-logo.svg"
          alt="TMDB Logo"
          width={100}
          height={40}
          className="mx-auto h-6 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>

      <p>
        © 2025 <span className="font-semibold text-white">MarcDevCEO</span> —
        Developer of MoviFind
      </p>
    </footer>
  );
}
