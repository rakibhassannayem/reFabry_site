import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.product);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />
        <div className="p-8">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4">{product.name}</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">{product.short_desc}</p>
          <div className="mt-8 space-y-4">
            <p className="text-3xl font-bold text-emerald-600">৳ {product.price}</p>
            <p className="text-lg">
              <span className="text-gray-600">Stock Available:</span>{' '}
              <span className="font-medium text-indigo-700">{product.stock} units</span>
            </p>
          </div>
          <button className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;