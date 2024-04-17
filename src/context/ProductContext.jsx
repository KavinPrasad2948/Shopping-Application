import  { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data and set state
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Function to fetch products data
const fetchProducts = async () => {
  // Example fetch request
  const response = await fetch("http://localhost:5173/public/Product.json")
  const data = await response.json();
  return data;
};

export { ProductProvider, ProductContext };
