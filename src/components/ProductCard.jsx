import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="rounded mb-4 h-60 w-full object-cover"
      />
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-600 text-sm flex-grow">{product.short_desc?.slice(0, 80)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold text-primary">৳ {product.price}</span>
        <Link
          to={`/product/${product.id}`}
          className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          View <ShoppingCart size={16} />
        </Link>
      </div>
    </div>
  );
}