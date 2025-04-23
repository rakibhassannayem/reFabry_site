import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative group">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-indigo-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <Eye size={18} />
            View Details
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-indigo-800 hover:text-indigo-600 transition-colors">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.short_desc?.slice(0, 80)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">৳{product.price}</span>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}