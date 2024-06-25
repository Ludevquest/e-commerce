import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import Modal from './Modal';
import Register from './Register';
import Login from './Login';
import { useAuth } from '@/context/authContext';
import {FaBars, FaTimes } from 'react-icons/fa';
import { PiShoppingCart } from "react-icons/pi";
import { MdCollections, MdContactSupport } from 'react-icons/md';
import { GrDisabledOutline, GrLogout, GrRestroomMen, GrRestroomWomen } from 'react-icons/gr';
import { Menu } from '@mui/material';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isNavSidebarOpen, setIsNavSidebarOpen] = useState(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);
  const { items } = useCart();
  const { user, logout } = useAuth();

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleRegisterClose = () => {
    setOpenModal(false);
  };

  const handleLoginClose = () => {
    setOpenModal(false);
  };

  const openRegisterModal = () => {
    setModalContent(<Register onClose={handleRegisterClose} />);
    setOpenModal(true);
  };

  const openLoginModal = () => {
    setModalContent(<Login onClose={handleLoginClose} />);
    setOpenModal(true);
  };

  const toggleNavSidebar = () => {
    setIsNavSidebarOpen(!isNavSidebarOpen);
  };

  const toggleUserSidebar = () => {
    setIsUserSidebarOpen(!isUserSidebarOpen);
  };

  return (
    <header className=" header bg-white shadow-md relative">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className='flex gap-8'>
        <div className="flex items-center">
          <button className="lg:hidden" onClick={toggleNavSidebar}>
            <FaBars size={20} />
          </button>
          <h1 className="pl-4 lg:pl-8">
            <Image src="/images/logo.svg" alt="logo" width="138" height="20" priority />
          </h1>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <a href="#" className="underline-hover text-darkGrayishBlue hover:text-veryDarkBlue">
            Collections
          </a>
          <a href="#" className="underline-hover text-darkGrayishBlue hover:text-veryDarkBlue">
            Men
          </a>
          <a href="#" className="underline-hover text-darkGrayishBlue hover:text-veryDarkBlue">
            Women
          </a>
          <a href="#" className="underline-hover text-darkGrayishBlue hover:text-veryDarkBlue">
            About
          </a>
          <a href="#" className="underline-hover text-darkGrayishBlue hover:text-veryDarkBlue">
            Contact
          </a>
        </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative" onClick={toggleCartVisibility}>
            <PiShoppingCart size={22} />
            {items.length > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full px-2 ml-2">
                {items.length}
              </span>
            )}
          </button>
          <button className="lg:hidden" onClick={toggleUserSidebar}>
            <Image
              className="hover:border-primary hover:border-2 rounded-full"
              src="/images/image-avatar.png"
              alt="avatar"
              width="30"
              height="30"
            />
          </button>
          {user ? (
            <>
            <span className="hidden lg:inline font-bold">{user}</span>
            <button onClick={logout}>
              <GrLogout aria-label='logout' className='hidden lg:block' size={20} />
            </button>
            </>
          ) : (
            <>
              <button className="hidden lg:inline" onClick={openRegisterModal}>
                Register
              </button>
              <button className="hidden lg:inline" onClick={openLoginModal}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
      {isNavSidebarOpen && (
        <div className="fixed inset-0 z-50 flex ">
          <div className="sidebar w-64 h-full bg-white  shadow-lg p-0 pl-3 pt-2">
            <button onClick={toggleNavSidebar} className="mb-6 text-black ">
              <FaTimes size={20} />
            </button>
            <nav className="flex flex-col space-y-4 text-black">
            <div className='flex gap-2 hover:text-veryDarkBlue cursor-pointer'>
            <MdCollections size={20} />
              <a href="#" className="text-black font-bold hover:text-veryDarkBlue">
                Collections
              </a>
            </div>
            <div className='flex gap-2 hover:text-veryDarkBlue cursor-pointer'>
              <GrRestroomMen aria-label='icon-men' size={20} />
              <a href="#" className="text-black font-bold hover:text-veryDarkBlue">
                Men
              </a>
            </div>
            <div className='flex gap-2'>
              <GrRestroomWomen aria-label='icon-women' size={20} />
              <a href="#" className="text-black font-bold hover:text-veryDarkBlue">
                Women
              </a>
            </div>
            <div className='flex gap-2 hover:text-veryDarkBlue cursor-pointer'>
              <GrDisabledOutline />
              <a href="#" className="text-black font-bold hover:text-veryDarkBlue">
                About
              </a>
            </div>
            <div className='flex gap-2 hover:text-veryDarkBlue cursor-pointer'>
              <MdContactSupport aria-label='icon-contact' size={20} />
              <a href="#" className="text-black font-bold hover:text-veryDarkBlue">
                Contact
              </a>
            </div>
            </nav>
          </div>
          <div className="flex-1 bg-black opacity-50" onClick={toggleNavSidebar}></div>
        </div>
      )}
      {isUserSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="sidebar bg-white w-64 h-full shadow-lg p-4">
            <button onClick={toggleUserSidebar} className="mb-6">
              <FaTimes size={20} />
            </button>
            <nav className="flex flex-col space-y-4">
              {user ? (
                <>
                  <span className=" inline-block border-4 border-black px-0.5 py-0.5 rounded text-black font-bold text-center transition duration-300 ease-in-out transform hover:border-darkGrayishBlue hover:shadow-lg">{user}</span>
                  <button 
                  className="text-white font-bold hover:text-white bg-veryDarkBlue hover:bg-darkGrayishBlue rounded transition duration-500 ease-in-out transform" 
                  onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="text-black font-bold hover:text-veryDarkBlue" onClick={openRegisterModal}>
                    Register
                  </button>
                  <button className="text-black font-bold hover:text-veryDarkBlue" onClick={openLoginModal}>
                    Login
                  </button>
                </>
              )}
            </nav>
          </div>
          <div className="flex-1 bg-black opacity-50" onClick={toggleUserSidebar}></div>
        </div>
      )}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        {modalContent}
      </Modal>
      {isCartVisible && <Cart />}
    </header>
  );
};

export default Header;