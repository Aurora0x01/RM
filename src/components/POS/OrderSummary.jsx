import React from 'react';
import OrderItem from '../POS/OrderItem';

const OrderSummary = ({ order, onUpdateQuantity, onRemoveItem, onPlaceOrder }) => {
  const subtotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="order-summary">
      <h2>Order N° 1</h2>
      {order.map((item, index) => (
        <OrderItem
          key={index}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}
      <div className="totals">
        <p>Subtotal: {subtotal.toFixed(2)} dt</p>
        <p>TVA (7%): {tax.toFixed(2)} dt</p>
        <p>Total: {total.toFixed(2)} dt</p>
      </div>
      <div className="payment-method">
        <button>Cash</button>
        <button>Card</button>
      </div>
      <button className="place-order" onClick={onPlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
