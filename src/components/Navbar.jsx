import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

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
            <Link to="/cart" className="hover:text-blue-200 transition relative">
              Cart
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}