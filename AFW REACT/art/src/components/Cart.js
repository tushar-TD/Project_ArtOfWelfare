import React, { useState } from 'react';
import './Cart.css'; // Import your CSS file for styling

const Cart = ({ selectedItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.art_id}>
            <div className="cart-item">
              <span>{item.art_name}</span>
              <span>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
