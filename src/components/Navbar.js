"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { FaCow } from "react-icons/fa6";
import Avatar from "@/components/Avatar";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully.");
    setMenuOpen(false);
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-green-700 flex items-center gap-2">
          <FaCow /> QurbaniHat
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link href="/animals" className="text-gray-700 hover:text-green-700">All Animals</Link>

          {!loading && (
            user ? (
              <div className="flex items-center gap-3">
                <Link href="/my-profile">
                  <Avatar user={user} size="w-8 h-8" textSize="text-sm" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
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
            )
          )}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <Link href="/" className="text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/animals" className="text-gray-700" onClick={() => setMenuOpen(false)}>All Animals</Link>

          {!loading && (
            user ? (
              <>
                <Link href="/my-profile" className="text-gray-700" onClick={() => setMenuOpen(false)}>My Profile</Link>
                <button onClick={handleLogout} className="text-left text-red-500">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/register" className="text-gray-700" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )
          )}
        </div>
      )}
    </nav>
  );
}