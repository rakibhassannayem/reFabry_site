import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag size={24} />
            <span className="text-2xl font-bold">ReFabry</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/cart" className="hover:text-blue-200 transition">Cart</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}