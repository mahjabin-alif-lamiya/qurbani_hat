export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">QurbaniHat</h3>
          <p className="text-sm">
            আপনার বিশ্বস্ত কুরবানির পশু মার্কেটপ্লেস। ভালো মানের গরু ও ছাগল খুঁজুন সহজেই।
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@qurbanihat.com</p>
          <p className="text-sm">Phone: +880 1XXX-XXXXXX</p>
          <p className="text-sm">Chattogram, Bangladesh</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-700">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}