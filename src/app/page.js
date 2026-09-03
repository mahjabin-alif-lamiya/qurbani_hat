import Link from 'next/link';
import { FaCow, FaLightbulb, FaAward } from 'react-icons/fa6';
import animalsData from '../../public/animals.json';

export default function HomePage() {
  const featuredAnimals = animalsData.slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* ১. Hero Section */}
      <section className="bg-green-700 text-white text-center py-20 px-4">
        <h1 className="animate__animated animate__fadeInDown text-4xl md:text-6xl font-extrabold mb-4 flex items-center justify-center gap-3">
          স্বাগতম কুরবানির হাটে! <FaCow className="text-white" />
        </h1>
        <p className="animate__animated animate__fadeIn text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          আপনার কুরবানির জন্য সুস্থ, সবল এবং খাঁটি দেশি পশু বুকিং করুন ঘরে বসেই।
        </p>
        <Link href="/animals" className="animate__animated animate__fadeInUp bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition inline-block">
          Browse Animals
        </Link>
      </section>

      {/* ২. Featured Animals (৪টি পশু) */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Animals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal, index) => (
            <div
              key={animal.id}
              className="animate__animated animate__fadeInUp bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-grow">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{animal.type}</span>
                <h3 className="text-xl font-bold mt-2 text-gray-800">{animal.name}</h3>
                <p className="text-sm text-gray-500">Breed: {animal.breed}</p>
                <p className="text-sm text-gray-500">Location: {animal.location}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-red-500">৳{animal.price.toLocaleString()}</span>
                  <span className="text-xs bg-gray-100 p-1 rounded font-medium">{animal.weight} KG</span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link href={`/animals/${animal.id}`} className="block text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. Extra Section 1: Qurbani Tips */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
            Qurbani Tips <FaLightbulb className="text-yellow-500" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-green-700 mb-2">পশু চেনার উপায়</h4>
              <p className="text-gray-600 text-sm">পশুর বয়স নিশ্চিত করুন (গরুর অন্তত ২ বছর, ছাগলের ১ বছর)। দাঁত দেখে বয়স যাচাই করুন।</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-green-700 mb-2">সুস্থতা যাচাই</h4>
              <p className="text-gray-600 text-sm">পশুর চোখ উজ্জ্বল কি না, পিঠের কুঁজ শক্ত কি না এবং পশুটি চঞ্চল কি না তা খেয়াল রাখুন।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ৪. Extra Section 2: Top Breeds */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
          Top Breeds <FaAward className="text-yellow-600" />
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 shadow-sm">Mirzapuri Red Cow</span>
          <span className="bg-white border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 shadow-sm">Shahiwal Cow</span>
          <span className="bg-white border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 shadow-sm">Black Bengal Goat</span>
          <span className="bg-white border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 shadow-sm">Jamunapari Goat</span>
        </div>
      </section>

    </div>
  );
}