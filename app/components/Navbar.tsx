import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="flex justify-center m-10 rounded-lg bg-blue-900 sm:flex-col sm:justify-start sm:m-0 sm:rounded-none sm:p-10 sm:h-full">
            <Link className="flex items-center m-5 sm:m-2 font-bold hover:bg-blue-700 p-3 sm:p-6 rounded" href="/">Home</Link>
            <Link className="text-center m-5 sm:m-2 font-bold hover:bg-blue-700 p-3 sm:p-4 rounded" href="topmovies">Top Movies</Link>
            <Link className="text-center m-5 sm:m-2 font-bold hover:bg-blue-700 p-3 sm:p-4 rounded" href="topseries">Top Series</Link>
        </nav>
    </div>
  )
}

export default Navbar;