// components/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              </div>
              <p className="text-lg font-semibold">${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;