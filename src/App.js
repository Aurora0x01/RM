import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import OrderSummary from './components/OrderSummary';
import "@fortawesome/fontawesome-free/css/all.css";
import latte from './components/photos/latte.jpg';
import hotChocolate from './components/photos/hotchocolate.jpg';
import icedCoffee from './components/photos/icecoffee.jpg';
import icedChocolate from './components/photos/icechocolate.jpg';
import cocaCola from './components/photos/icechocolate.jpg';
import fanta from './components/photos/icechocolate.jpg';



const App = () => {
  const categories = ['All categories', 'Hot', 'Over Iced', 'Soda Selections', 'Blended', 'Smoothie'];
  const products = [
    { name: 'Latte', price: 4, image: latte, category: 'Hot' },
    { name: 'Hot Chocolate', price: 4, image: hotChocolate, category: 'Hot' },
    { name: 'Iced Coffee', price: 4, image: icedCoffee, category: 'Over Iced' },
    { name: 'Iced Chocolate', price: 4, image: icedChocolate, category: 'Over Iced' },
    { name: 'CocaCola', price: 4, image: cocaCola, category: 'Soda Selections' },
    { name: 'Fanta', price: 4, image: fanta, category: 'Soda Selections' },
  ];
  

  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [order, setOrder] = useState([]);

  const filteredProducts =
    selectedCategory === 'All categories'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToOrder = (product) => {
    const existingItem = order.find((item) => item.name === product.name);
    if (existingItem) {
      setOrder(
        order.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(product);
    } else {
      setOrder(
        order.map((item) =>
          item.name === product.name ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (product) => {
    setOrder(order.filter((item) => item.name !== product.name));
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    setOrder([]);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar categories={categories} onSelectCategory={setSelectedCategory} />
        <ProductList products={filteredProducts} onAddToOrder={handleAddToOrder} />
        <OrderSummary
          order={order}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default App;
