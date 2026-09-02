"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext";

export default function UpdateProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", photoURL: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (user) {
      setFormData({
        name: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [loading, user, router]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (err) {
      toast.error("Update failed. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-6">Update Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4 border rounded-xl p-6 shadow-sm">
        <input
          type="url"
          name="photoURL"
          placeholder="Photo URL"
          value={formData.photoURL}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}