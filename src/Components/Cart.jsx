import React from "react";
import "../Styles/Components.css";

const Cart = (props) => {
  const { cartItems } = props;

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price2023;
  }, 0);

  // Format number with commas and dots
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Format size in billions
  const formatSize = (size) => {
    const billions = size / 1000;
    return `${billions}B`;
  };

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ticker</th>
            <th>Name</th>
            <th>Price 2023</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.ticker}</td>
                <td>{item.name}</td>
                <td>${formatNumber(item.price2023.toFixed(2))}</td>
                <td>{formatSize(item.size)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total-price">
        <span>TOTAL:</span>
        <span>${formatNumber(totalPrice.toFixed(2))}</span>
      </div>
    </div>
  );
};

export default Cart;
