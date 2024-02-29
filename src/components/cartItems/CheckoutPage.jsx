
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext); // Assuming you have a CartContext
  const [orderDetails, setOrderDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Add validation checks for each field as necessary, e.g.:
    if (!orderDetails.fullName) {
      formIsValid = false;
      errors['fullName'] = 'Full name is required.';
    }

    // Repeat for other fields...

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Order details:', orderDetails);
      // Process the checkout
      alert('Checkout successful!');
      // Here you would typically clear the cart and redirect the user to a success page
    }
  };

  return (
    <div className="container py-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={orderDetails.fullName} onChange={handleChange} />
          {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
        </div>
        {/* Repeat for other fields like address, city, etc. */}
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
