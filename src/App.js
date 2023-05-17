import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Components/Overview";
import "./Styles/Components.css";

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
  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            maxLength={35}
            type="text"
            id="taskInput"
            value={task.text}
            onChange={this.handleChange}
          />
          <hr />
          <button>Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}
export default App;
