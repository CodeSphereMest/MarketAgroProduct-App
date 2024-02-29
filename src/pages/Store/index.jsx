// // src/pages/CatalogPage.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';


// Example product data - in a real app, this might come from an API
const products = [
  { id: 1, name: 'Organic Apples', price: 2.99, category: 'Fruits', image: '../assets/productsImages/Fruits/apple.jpg'},
  { id: 2, name: 'Almond Milk', price: 3.49, category: 'Dairy Alternatives' },
  { id: 3, name: 'Fresh Avocados', price: 1.99, category: 'Vegetables' },
  // More products...
];

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');

  const filteredProducts = products.filter(product => {
    return (
      (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
      (filterCategory !== 'All' ? product.category === filterCategory : true) &&
      (filterPrice !== 'All' ? (filterPrice === 'Under $3' ? product.price < 3 : product.price >= 3) : true)
    );
  });

  return (
    <div className="container py-5">
      <h2>Product Catalog</h2>
      <div className="filters mb-3">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-2"
        />
        <select onChange={(e) => setFilterCategory(e.target.value)} className="form-select mb-2">
          <option value="All">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy Alternatives">Dairy Alternatives</option>
          {/* Add more categories as needed */}
        </select>
        <select onChange={(e) => setFilterPrice(e.target.value)} className="form-select mb-2">
          <option value="All">All Prices</option>
          <option value="Under $3">Under $3</option>
          <option value="Over $3">$3 and above</option>
        </select>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
