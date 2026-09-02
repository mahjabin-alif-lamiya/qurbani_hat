"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(cred.user, {
        displayName: formData.name,
        photoURL: formData.photoURL || undefined,
      });
      toast.success("Registration successful! Please login.");
      router.push("/login");
    } catch (err) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success("Registration successful!");
      router.push("/");
    } catch (err) {
      toast.error("Google sign-up failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

      <form onSubmit={handleSubmit} className="space-y-4 border rounded-xl p-6 shadow-sm">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="url"
          name="photoURL"
          placeholder="Photo URL (optional)"
          value={formData.photoURL}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          className="w-full border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      <button
        onClick={handleGoogleRegister}
        className="w-full mt-4 border py-2 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center gap-2"
      >
        <FcGoogle className="text-xl" /> Continue with Google
      </button>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-green-700 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}