"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import UpcomingMovies from "./components/upcoming_movies";
import TopRated from "./components/toprated";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-500">
      <header className="text-center p-5 bg-blue-900">
        <h1 className="text-3xl font-mono">MoviFind</h1>
        <h2 className="mt-5 italic">Explore and find something to watch</h2>
      </header>
      <div className="sm:flex">
        <Navbar />
        <div className="sm:overflow-auto p-5">
          <UpcomingMovies />
          <TopRated />
        </div>
      </div>
      <footer className="bg-blue-900">
        <h6 className="text-center p-2">2024 © Created by MarcDevCEO</h6>
      </footer>
    </main>
  );
}
