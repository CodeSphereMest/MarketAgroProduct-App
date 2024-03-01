
import React, { useState, useContext } from 'react';
import { CartContext } from '../CartPage/CartContext';
import Navbar from '../Navbar/Navbar';


const products = [
  { id: 1, name: 'Organic Apples', price: 2.99, category: 'Fruits', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Almond Milk', price: 3.49, category: 'Dairy Alternatives', image:'https://images.pexels.com/photos/4187716/pexels-photo-4187716.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Fresh Avocados', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/4144459/pexels-photo-4144459.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Onion', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Tomato', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Carrot', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'Broccoli', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Orange', price: 1.99, category: 'Vegetables', image:'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Store = () => {
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
        <Navbar />
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
              <img src={product.image} className="card-img-top" width="30%" alt={product.name} />
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

export default Store;
