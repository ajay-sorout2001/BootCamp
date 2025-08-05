import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'T-Shirt', price: 299, image: 'https://oldnavy.gap.com/webcontent/0052/555/949/cn52555949.jpg' },
    { id: 2, name: 'Jeans', price: 999, image: 'https://cdn-img.prettylittlething.com/8/b/1/d/8b1d9e15dad88fa6b1b108a860a1a85668d823c4_cmn9775_2.jpg' },
    { id: 3, name: 'Shoes', price: 1499, image: 'https://tse4.mm.bing.net/th/id/OIP.yl1opQ3CQTbgGv8xvtTdMAHaHa?pid=Api&P=0&h=180' },
  ];

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="app">
      <Header cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;


