import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Globalstyles'
import  {CartProvider}  from '../context/CartContext';
import { AuthProvider } from '@/context/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <CartProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CartProvider>
    </AuthProvider>
  )
}

export default MyApp
