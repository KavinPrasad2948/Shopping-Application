import { createContext, useState } from 'react';
import productsData from '../assets/Public/Product.json';
import PropTypes from 'prop-types'

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductProvider, ProductContext };