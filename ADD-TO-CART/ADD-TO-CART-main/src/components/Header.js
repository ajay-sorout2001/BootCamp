import React from 'react';

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>E-commerce Store</h1>
      <div className="cart-icon">
        🛒 ({cartCount})
      </div>
    </header>
  );
}

export default Header;