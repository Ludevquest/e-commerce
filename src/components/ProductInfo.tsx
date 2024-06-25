import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { PiShoppingCart } from 'react-icons/pi';

interface ProductInfoProps {
  productId: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        } else {
          setError('Produto não encontrado.');
          setLoading(false);
        }
      } catch (err) {
        setError('Erro ao carregar produto.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Carregando produto...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="product-info h-half-screen space-y-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-lg">
        <h3 className=" product-empresa uppercase text-sm text-darkGrayishBlue font-semibold pb-4 pt-4">Sneaker Company</h3>
        <h1 className="product-title text-5xl font-bold text-veryDarkBlue">{product.name}</h1>
        <p className="text-darkGrayishBlue text-size pt-9 pb-2">{product.description}</p>
        <div className="current-price my-4">
          <div className="original-price flex items-center space-x-4">
            <span className="text-2xl font-bold text-veryDarkBlue">${product.price}.00</span>
            <span className="bg-veryDarkBlue text-white font-semibold px-2 py-1 rounded">50%</span>
          </div>
          <span className=" line-through-price text-base text-gray-500 line-through">$250.00</span>
        </div>
        <div className="quantity-cart flex items-center space-x-4">
          <div className="quantity-control flex items-center border p-2 space-x-4">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 text-primary font-black">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 text-primary font-black">+</button>
          </div>
          <button
            className="add-to-cart-button flex-1 bg-primary text-black font-bold py-4 px-4 rounded-lg flex items-center justify-center hover:bg-paleOrange"
            onClick={handleAddToCart}
          >
            <PiShoppingCart size={20} className="mr-3" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
