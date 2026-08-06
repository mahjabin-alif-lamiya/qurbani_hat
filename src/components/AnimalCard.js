import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition p-4 bg-white">
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{animal.name}</h3>
      <p className="text-sm text-gray-500">{animal.breed} • {animal.location}</p>
      <p className="text-green-700 font-bold mt-1">৳ {animal.price.toLocaleString()}</p>
      <p className="text-sm text-gray-500">Weight: {animal.weight}kg • Age: {animal.age}yr</p>

      <Link
        href={`/animals/${animal.id}`}
        className="block mt-3 text-center bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
      >
        Details
      </Link>
    </div>
  );
}