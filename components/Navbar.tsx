"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <nav className="w-full bg-red-700/25 backdrop-blur-lg text-white px-6 py-4 flex items-center justify-between fixed top-0 z-50 shadow-md">
      <Link href="/" className="sm:text-3xl font-bold tracking-wide">
        🎬 MoviFind
      </Link>

      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="px-1 sm:px-3 py-1 rounded bg-zinc-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-1 sm:px-3 py-1 rounded hover:bg-indigo-700"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
