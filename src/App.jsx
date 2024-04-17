import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
const MainLayout = lazy(() => import('./Pages/home'));
const ProductCard = lazy(() => import('./Pages/ProductCard'));
const ProductPage = lazy(() => import('./Pages/ProductPage'));
const CartPage = lazy(() => import('./Pages/CartPage'));
const Footer = lazy(() => import('./Pages/Footer'));

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/product" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Suspense>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
