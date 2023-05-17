import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Components/Overview";
import "./Styles/Components.css";
import { FaPlusCircle } from "react-icons/fa";
import Footer from "./Components/Footer";

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
    };
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

  deleteTask = (taskId) => {
    this.setState(
      (prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      }),
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  editTask = (taskId, updatedText) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: updatedText };
      }
      return task;
    });

    this.setState(
      {
        tasks: updatedTasks,
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput"></label>
          <div className="input-add-container">
            <input
              maxLength={120}
              type="text"
              id="taskInput"
              value={task.text}
              placeholder="Enter a Task"
              onChange={this.handleChange}
            />
            <hr />
            <button className="add-button">
              <FaPlusCircle />
            </button>
          </div>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
        <Footer />
      </div>
    );
  }
}

export default App;
