// pages/store.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import {products} from '../data/products';

const Store: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p>{product.title}</p>
            <p>{product.content}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;