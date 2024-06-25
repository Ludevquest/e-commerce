import React from 'react';
import { useRouter } from 'next/router'; 
import Header from '../../components/Header';
import ProductGallery from '../../components/ProductGallery';
import ProductInfo from '../../components/ProductInfo';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId = typeof id === 'string' ? Number(id) : null;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 flex flex-col lg:flex-row justify-around items-start gap-8">
        <ProductGallery />
        {productId ? (
          <ProductInfo productId={productId} />
        ) : (
          <p>Carregando produto...</p>
        )}
      </main>
    </div>
  );
};

export default ProductPage;

