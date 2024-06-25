import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';

const Home: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId = typeof id === 'string' ? Number(id) : null;

  return (
    <div>
      <Header />
      <main className=" index-container container h-total-screen mx-auto p-4 flex flex-col lg:flex-row justify-around items-center">
        <ProductGallery />
        {1 ? (
          <ProductInfo productId={1} />
        ) : (
          <p>Carregando produto...</p>
        )}
      </main>
    </div>
  );
};

export default Home;
