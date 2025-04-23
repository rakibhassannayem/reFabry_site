export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ReFabry</h3>
            <p className="text-gray-400">Your one-stop shop for quality products.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@refabry.com</p>
            <p className="text-gray-400">Phone: +880 1234567890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          &copy; {new Date().getFullYear()} ReFabry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}