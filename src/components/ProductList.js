import React from 'react';
import './ProductList.css'
const ProductList = ({ products, onAddToOrder }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Prix: {product.price} dt</p>
          <button onClick={() => onAddToOrder(product)}>Add to Order</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
