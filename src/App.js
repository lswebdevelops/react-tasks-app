import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Components/Overview";
import "./Styles/Components.css";
import { FaPlusCircle } from "react-icons/fa";
import Footer from "./Components/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
     // Check if task.text is empty
  if (this.state.task.text.trim() === "") {
    return; // Exit the function if the text is empty
  }
    const newTask = {
      text: this.state.task.text,
      id: uniqid(),
    };
    this.setState({
      tasks: this.state.tasks.concat(newTask),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };
  editTask = (taskId, updatedText) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: updatedText };
      }
      return task;
    });
  
    this.setState({
      tasks: updatedTasks,
    });
  };
  
  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput"></label>
          <div className="input-add-container">
          <input
            maxLength={35}
            type="text"
            id="taskInput"
            value={task.text}
            placeholder="Enter a Task"
            onChange={this.handleChange}
          />
          <hr />
          <button  
            className="add-button">
            < FaPlusCircle />
            </button>
          </div>
        </form>
        <Overview 
          tasks={tasks} 
          deleteTask={this.deleteTask}
          editTask={this.editTask} />
          <Footer />
      </div>
    );
  }
}
export default App;
