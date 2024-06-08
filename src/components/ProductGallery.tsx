import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg',
];

const ProductGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4">
        <Image src={selectedImage} alt="Selected product" className="w-full rounded-lg" width={50} height={50} />
      </div>
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <button key={index} onClick={() => setSelectedImage(image)} className="border-2 border-transparent focus:outline-none focus:border-primary rounded-lg">
            <Image src={image} alt={`Product thumbnail ${index + 1}`} className="w-20 h-20 object-cover rounded-lg" width={50} height={50} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
