// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import uniqid from "uniqid";
import Overview from "./Components/Overview";
import Cart from "./Components/Cart";
import "./Styles/Components.css";

class App extends Component {
  constructor() {
    super();
    const tasksFromStorage = localStorage.getItem("tasks");
    const initialTasks = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: initialTasks,
      cartItems: [], // Initialize an empty array for cart items
    };
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.task.text.trim() === "") {
      return;
    }
    const newTask = {
      text: this.state.task.text,
      id: uniqid(),
    };
    this.setState(
      (prevState) => ({
        tasks: [...prevState.tasks, newTask],
        task: {
          text: "",
          id: uniqid(),
        },
      }),
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  // Function to add an item to the cart
  addToCart = (item) => {
    const { cartItems } = this.state;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            price2023: cartItem.price2023 * 2,
          };
        }
        return cartItem;
      });

      this.setState({
        cartItems: updatedCartItems,
      });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, item],
      }));
    }
  };

  render() {
    const { task, tasks, cartItems } = this.state;
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={<Overview tasks={tasks} addToCart={this.addToCart} />}
            />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
