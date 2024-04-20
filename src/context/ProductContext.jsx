import { createContext, useState } from 'react';
import productsData from '../assets/Public/Product.json'; // Changed variable name

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
