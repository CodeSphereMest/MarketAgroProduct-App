
import React, { useContext, useState } from 'react';
import { SellerContext } from '../sellerspage/SellersContext';

const SellersPage = () => {
  const { products, addProduct, editProduct, deleteProduct } = useContext(SellerContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = searchTerm
    ? products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : products;

  return (
    <div className="container py-5">
      <h2>Seller's Dashboard</h2>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />
      {/* Product list */}
      {filteredProducts.map((product) => (
        <div key={product.id} className="d-flex justify-content-between align-items-center">
          <div>{product.name} - ${product.price} - {product.category}</div>
          <div>
            <button onClick={() => editProduct(product.id)} className="btn btn-info btn-sm">Edit</button>
            <button onClick={() => deleteProduct(product.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      ))}
        <button onClick={addProduct} className="btn btn-primary">Add Product</button>
    </div>
  );
};

export default SellersPage;
