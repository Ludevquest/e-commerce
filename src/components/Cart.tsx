import React from 'react';
import { useCart, CartItem } from '../context/CartContext';
import Image from 'next/image';

const Cart: React.FC = () => {
  const { items: cartItems, removeFromCart } = useCart();

  return (
    <div className="absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 w-80">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-darkGrayishBlue">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src={`/images/products/${item.id}.png`}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  fetchPriority="high" // Use a propriedade correta aqui
                />
              </div>
              <div>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm text-darkGrayishBlue">${item.price}</p>
                <p className="text-sm text-darkGrayishBlue">Quantity: {item.quantity}</p>
              </div>
              <button
                className="ml-auto bg-red-500 text-white p-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
