
import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 w-80">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-darkGrayishBlue">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-4">
              <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg"/>
              <div className="ml-4 flex-1">
                <h3 className="text-veryDarkBlue">{item.name}</h3>
                <p className="text-darkGrayishBlue">{item.quantity} x ${item.price}.00 <span className="font-bold text-veryDarkBlue">${item.quantity * item.price}.00</span></p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
