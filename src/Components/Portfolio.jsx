import React from "react";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
<<<<<<< HEAD
  return (
      <h1>My portfolio</h1>
  )
}
=======
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartItemsString = searchParams.get("cartItems");
  const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];

  return (
    <div>
      <h1>Your Portfolio</h1>
      {cartItems.length > 0 ? (
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
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.ticker}</td>
                <td>{item.name}</td>
                <td>${item.price2023.toFixed(2)}</td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your portfolio is empty.</p>
      )}
    </div>
  );
};

>>>>>>> 02d243fd6276c0404ad2b6f16f66b57e4cf0b029
export default Portfolio;
