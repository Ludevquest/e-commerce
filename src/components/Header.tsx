import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Sneakers</h1>
        <nav className="space-x-4">
          <a href="#" className="text-darkGrayishBlue hover:text-veryDarkBlue">Collections</a>
          <a href="#" className="text-darkGrayishBlue hover:text-veryDarkBlue">Men</a>
          <a href="#" className="text-darkGrayishBlue hover:text-veryDarkBlue">Women</a>
          <a href="#" className="text-darkGrayishBlue hover:text-veryDarkBlue">About</a>
          <a href="#" className="text-darkGrayishBlue hover:text-veryDarkBlue">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <svg className="w-6 h-6 text-darkGrayishBlue" fill="currentColor" viewBox="0 0 24 24"><path d="M10 18a2 2 0 11-4 0 2 2 0 014 0zm10-2a2 2 0 110 4 2 2 0 010-4zM8 6h13l-1.68 9H9.68L8 6zm1 11c-1.1 0-1.99.9-1.99 2S7.9 21 9 21s2-.9 2-2-.9-2-2-2zm10 2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM8 4l-.73 4H5.32l1.68-9h13.4l-1.68 9H10L8 4z"/></svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
          </button>
          <Image src="/images/avatar.png" alt="User avatar" className="w-8 h-8 rounded-full"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
