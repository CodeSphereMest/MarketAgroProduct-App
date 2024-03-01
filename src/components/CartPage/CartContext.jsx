import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => ([...prevItems, product]));
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
     
      {children}
    </CartContext.Provider>
  );
};
