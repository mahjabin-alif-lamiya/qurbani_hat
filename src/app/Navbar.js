import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
      <div className="text-xl font-bold">🚀 QurbaniHat</div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/animals" className="hover:underline">All Animals</Link>
        <Link href="/my-profile" className="hover:underline">Profile</Link>
        <Link href="/login" className="bg-white text-green-600 px-3 py-1 rounded font-semibold">Login</Link>
      </div>
    </nav>
  );
}