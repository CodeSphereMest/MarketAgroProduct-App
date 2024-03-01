import { useContext, useState } from "react";
import { CartContext } from "../CartPage/CartContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import CheckoutPage from "../checkoutpage/CheckoutPage";


const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container py-5 b-image" >
      <Navbar />
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                {item.name} - ${item.price}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          ))}
          {/* Implement checkout functionality */}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      
      <CheckoutPage />
    
    </div>
  );
};

export default CartPage;
