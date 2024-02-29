
import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="container py-5">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center">
                            <div>{item.name} - ${item.price}</div>
                            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
                        </div>
                    ))}
                    {/* Implement checkout functionality */}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
