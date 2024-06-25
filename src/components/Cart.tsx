import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart: React.FC = () => {
  const { items: cartItems, removeFromCart, checkout } = useCart();

  return (
    <div className={styles['cart-container']}>
      <h2 className={styles['cart-header']}>Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles['cart-empty']}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className={styles['cart-item']}>
              <div className={styles['cart-item-img']}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className={styles['cart-item-info']}>
                <p className={styles['cart-item-name']}>{item.name}</p>
                <div className={styles['cart-item-price-container']}>
                  <p className={styles['cart-item-price']}>${item.price}.00 x {item.quantity}</p>
                  <p className={styles['cart-item-total-price']}>${item.price * item.quantity}.00</p>
                </div>
              </div>
              <button
                className={styles['cart-remove-btn']}
                onClick={() => removeFromCart(item.id)}
              >
                <Image
                  src={'/images/icon-delete.svg'}
                  alt={'Delete'}
                  width={20}  // Ajuste para um tamanho menor
                  height={10} // Ajuste para um tamanho menor
                />
              </button>
            </div>
          ))}
          <div className={styles['cart-footer']}>
            <button className={styles['cart-checkout-btn']} onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;