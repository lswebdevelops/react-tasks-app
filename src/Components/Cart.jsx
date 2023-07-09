import React from "react";
import "../Styles/Components.css";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
const Cart = (props) => {
  const { cartItems, cartCount } = props;
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price2023;
  }, 0);
  // Format number with commas and dots
  const formatNumber = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // Format size in billions
  const formatSize = (size) => {
    const billions = size / 1000;
    return `${formatNumber(billions)}B`;
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
            <th>Subtotal</th>
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
                <td>${formatNumber(item.price2023)}</td>
                <td>{formatSize(item.size)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-price">
        <span>TOTAL:</span>
        <span>${formatNumber(totalPrice)}</span>
      </div>
      <Link className="link-payment" to="/payment" onClick={props.resetCartCount}>
  <FaMoneyCheckAlt />
<<<<<<< HEAD
  &nbsp; Pay and add to portfolio
=======
  &nbsp; Pay and add items to your Portfolio
>>>>>>> 02d243fd6276c0404ad2b6f16f66b57e4cf0b029
</Link>
    </div>
  );
};
export default Cart;
