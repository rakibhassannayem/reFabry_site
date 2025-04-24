import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { addToCart } from '../redux/cartSlice';
import { showToast } from '../utils/toast';


export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const product = useSelector(state => 
    state.product.products.find(p => p.id === parseInt(id))
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showToast('Added to cart!');
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden">
          <img
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-indigo-800">{product.name}</h1>
          <p className="text-gray-600 leading-relaxed">{product.short_desc}</p>
          
          <div className="text-3xl font-bold text-emerald-600">
            ৳{product.price}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}