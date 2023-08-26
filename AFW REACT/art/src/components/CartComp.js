import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const [arts, setArts] = useState([]);
  const navigate = useNavigate();
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setArts(storedCartItems || []);
  }, []);

  const calculateTotal = () => {
    return arts.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = arts.filter((item) => item.art_id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setArts(updatedCart);
  };

  const handleCheckout = async () => {
    const custId = JSON.parse(localStorage.getItem('loggedcustomer')).cust_id; // Replace with the actual customer ID
    const totalAmount = calculateTotal();
    const paymentId = Math.random().toString(36).substr(2, 9); // Generate a random payment ID
    const payMode = 'credit_card'; // Replace with the selected payment mode

    const artIds = arts.map((item) => item.art_id);

    const requestData = {
      cust_id: custId,
      total_amount: totalAmount,
      payment_id: paymentId,
      pay_mode: payMode,
      art_id: artIds,
    };
    try {
      const response = await fetch("http://localhost:8080/saveOrder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect to an order confirmation page
        navigate("/order")
        console.log('Order placed successfully!');
      } else {
        setMsg("Order Not Placed");

        // Handle error, e.g., show an error message
        console.error('Error placing the order');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>


      <ul className="list-group mt-4">
        {arts.map((item) => (
          <li key={item.art_id} className="list-group-item cart-item">
            <div className="cart-item-details">
              <strong>{item.art_name}</strong>
              <div className="cart-item-info">
                Price: {item.price} rs
                <br />
                Subtotal: {item.price} rs
              </div>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveItem(item.art_id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-buttons">
        <Link to="/customer_home" className="btn btn-primary">
          Continue Shopping
        </Link>
        <Button className="btn btn-primary" onClick={handleCheckout}>
          Buy
        </Button>
      </div>

      <p className="cart-subtotal mt-3">Cart Subtotal: {calculateTotal()} rs</p>
    </div >
  );
};

export default CartPage;
