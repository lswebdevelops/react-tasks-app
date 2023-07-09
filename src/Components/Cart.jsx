import React from "react";

const Cart = (props) => {
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
            {props.cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.ticker}</td>
                  <td>{item.name}</td>
                  <td>{item.price2023}</td>
                  <td>{item.size}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
export default Cart;
