import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative group">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Eye size={18} />
            View Details
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.short_desc?.slice(0, 80)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">৳{product.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}