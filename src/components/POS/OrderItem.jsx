import React from 'react';

const OrderItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="order-item">
      <span>{item.name}</span>
      <span>{item.price} dt</span>
      <div className="quantity-controls">
        <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
      </div>
      <button onClick={() => onRemoveItem(item)}>🗑️</button>
    </div>
  );
};

export default OrderItem;
