import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdClose, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Modal from 'react-modal';
import { CSSProperties } from 'styled-components';

const images = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg',
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    background: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const getVisibility = (): CSSProperties => {
  if (typeof window === 'undefined') {
    return { visibility: 'visible', cursor: 'default', border: 'none' };
  }

  const width = window.innerWidth;
  let visibility: 'visible' | 'hidden' = 'visible';
  let cursor: 'pointer' | 'default' = 'pointer';
  let border: 'rounded' | 'none' = 'rounded';

  if (width <= 768) {
    visibility = 'visible';
    cursor = 'pointer';
    border = 'rounded';
  }

  return { visibility, cursor, border };
};

const ProductGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visibilityStyle, setVisibilityStyle] = useState<CSSProperties>(getVisibility());
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibilityStyle(getVisibility());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='product-gallery w-full lg:w-1/2'>
      <div className="main-image w-full relative">
        <Image
          src={selectedImage}
          alt="Selected product"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={400}
          height={400}
          priority
          onClick={openModal}
          style={{ border: visibilityStyle.border}}
        />
        <button
          onClick={prevImage}
          className="text-4xl text-gray-600 p-2 bg-white rounded-full shadow-lg absolute left-2 top-1/2 transform -translate-y-1/2 lg:hidden"
          style={{ visibility: visibilityStyle.visibility, cursor: visibilityStyle.cursor }}
        >
          <MdNavigateBefore className='hover:text-primary cursor-pointer' />
        </button>
        <button
          onClick={nextImage}
          className="text-4xl text-gray-600 p-2 bg-white rounded-full shadow-lg absolute right-2 top-1/2 transform -translate-y-1/2 lg:hidden"
          style={{ visibility: visibilityStyle.visibility, cursor: visibilityStyle.cursor }}
        >
          <MdNavigateNext className='hover:text-primary cursor-pointer' />
        </button>
      </div>
      <div className="thumbnails flex max-lg:hidden justify-center space-x-7 pt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            className={`border-2 border-transparent focus:outline-none focus:border-primary rounded-lg ${selectedImage === image ? 'filter blur-sm' : ''}`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-20 h-20 rounded-lg shadow-lg max-w-lg lg:flex-none"
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          ...customStyles,
          overlay: { ...customStyles.overlay, ...visibilityStyle }
        }}
        contentLabel="Product Image Modal"
        ariaHideApp={false}
      >
        <div className='mb-5'>
          <button onClick={closeModal} className="absolute top-0 right-2 text-gray-600 text-2xl">
            <MdClose className='text-white hover:text-primary' />
          </button>
        </div>
        <div className="relative bg-transparent rounded-lg p-4 w-full h-full flex items-center justify-center">
          <button onClick={prevImage} className="text-4xl text-gray-600 p-2 bg-white rounded-full shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2">
            <MdNavigateBefore className='hover:text-primary' />
          </button>
          <Image
            src={selectedImage}
            alt="Selected product"
            className="max-h-half-screen rounded-lg"
            width={500}
            height={400}
          />
          <button onClick={nextImage} className="text-4xl text-gray-600 p-2 bg-white rounded-full shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2">
            <MdNavigateNext className='hover:text-primary' />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductGallery;