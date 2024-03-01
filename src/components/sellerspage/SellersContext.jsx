
import { createContext, useState } from 'react';

export const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [products, setProducts] = useState([
    // Initial product data
    { id: 1, name: 'Organic Apples', price: 2.99, category: 'Fruits' },
    { id: 2, name: 'Almond Milk', price: 3.49, category: 'Dairy Alternatives' },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <SellerContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {children}
    </SellerContext.Provider>
  );
};
