import React from "react";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
