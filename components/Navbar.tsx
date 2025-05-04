import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-red-700/25 backdrop-blur-lg text-white px-6 py-4 flex items-center justify-between fixed top-0 z-50 shadow-md">
      <Link href="/" className="text-3xl font-bold tracking-wide">
        MoviFind
      </Link>
      {/* Add more nav links or buttons here later if needed */}
    </nav>
  );
}
