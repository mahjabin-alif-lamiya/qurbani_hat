"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // পরে AuthContext থেকে real user data বসাবে
  const user = null; // temp — এখনো Auth বসাওনি
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-green-700">
          🐄 QurbaniHat
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <Link href="/animals" className="hover:text-green-700">All Animals</Link>

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/login" className="px-3 py-1 border rounded">
                Login
              </Link>
              <Link href="/register" className="px-3 py-1 bg-green-700 text-white rounded">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <Link href="/">Home</Link>
          <Link href="/animals">All Animals</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}