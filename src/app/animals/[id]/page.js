"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify"; // npm install react-toastify করে নিও যদি না থাকে

export default function AnimalDetailsPage() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = null; // পরে AuthContext থেকে বসাবে

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setAnimal(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first to book this animal.");
      return;
    }

    // এখানে DB/localStorage এ save করার দরকার নাই — assignment এ বলা আছে
    toast.success("Booking submitted successfully!");
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Animal not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Animal Details */}
      <div>
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-80 object-cover rounded-xl mb-4"
        />
        <h1 className="text-2xl font-bold">{animal.name}</h1>
        <p className="text-gray-500">{animal.breed} • {animal.location}</p>
        <p className="text-green-700 text-xl font-bold mt-2">
          ৳ {animal.price.toLocaleString()}
        </p>
        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p>Type: {animal.type}</p>
          <p>Weight: {animal.weight} kg</p>
          <p>Age: {animal.age} years</p>
          <p>Category: {animal.category}</p>
        </div>
        <p className="mt-4 text-gray-700">{animal.description}</p>
      </div>

      {/* Right: Booking Form */}
      <div className="border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Book This Animal</h2>

        {!user && (
          <p className="text-red-500 text-sm mb-3">
            You must be logged in to book. Please login first.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
            rows={3}
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}