"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Avatar from "@/components/Avatar";

export default function MyProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-4">
        <Avatar user={user} size="w-28 h-28" textSize="text-4xl" />
      </div>
      <h1 className="text-2xl font-bold">{user.displayName || "No name set"}</h1>
      <p className="text-gray-600 mt-1">{user.email}</p>

      <Link
        href="/my-profile/update"
        className="inline-block mt-6 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
      >
        Update Information
      </Link>
    </div>
  );
}