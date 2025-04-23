import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.product);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full h-96 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2 whitespace-pre-line">{product.short_desc}</p>
      <p className="text-xl mt-4">Price: ৳ {product.price}</p>
      <p className="mt-2">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;