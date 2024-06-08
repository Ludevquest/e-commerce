// src/components/ProductInfo.tsx

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: '1',
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity,
      image: '/images/image-product-1.jpg',
    });
  };

  return (
    <div className="max-w-md">
      <h2 className="text-3xl font-bold text-veryDarkBlue">Fall Limited Edition Sneakers</h2>
      <p className="text-darkGrayishBlue mt-4">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.
      </p>
      <div className="flex items-center gap-4 mt-4">
        <span className="text-2xl font-bold">$125.00</span>
        <span className="bg-paleOrange text-primary py-1 px-2 rounded-lg">50%</span>
        <span className="line-through text-grayishBlue">$250.00</span>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button className="bg-lightGrayishBlue p-2 rounded-lg" onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
        <span className="text-xl">{quantity}</span>
        <button className="bg-lightGrayishBlue p-2 rounded-lg" onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button className="bg-primary text-white py-2 px-4 rounded-lg mt-4" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductInfo;
