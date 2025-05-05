/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="min-w-screen text-center sm:flex sm:justify-between sm:items-center bg-red-700/25 backdrop-blur-lg text-white px-6 py-4 fixed top-0 z-50 shadow-md">
        <Link href="/" className="sm:text-3xl font-bold tracking-wide">
          🎬 MoviFind
        </Link>
        <h3 className="italic">"Your next watch is just a scroll away.”</h3>
    </nav>
  );
}
