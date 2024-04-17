import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it with the provided quantity
      setCartItems([...cartItems, item]);
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const increaseItemQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItemQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
let totalQuantity = 1;
 
   totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
 let  totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 
  let CartTotal = cartItems.length;
  return (
    <CartContext.Provider
      value={{
        CartTotal,
        cartItems, 
        addItemToCart, 
        removeItemFromCart, 
        updateItemQuantity, 
        increaseItemQuantity,
        decreaseItemQuantity,
        totalQuantity, 
        totalAmount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
