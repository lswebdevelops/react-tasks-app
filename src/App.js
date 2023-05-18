import React, {Component } from "react";
import uniqid from 'uniqid';
import './Styles/Components.css';
import Overview  from "./Components/Overview";


class App extends Component {
  constructor(){
    super();
    this.state = {
      task: {
        text: "",
        id: uniqid(),
        },
        tasks: []
    }
  }

  handleChanges = (e) => {
      this.setState=({
       task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };




  onSubmitTask = (e) => {
    e.preventDefault();
    // avoiding empty tasks:
    if(this.state.task.text.trim() === ""){
      return;
    }
    // end of avoiding empty tasks
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "",
      id: uniqid()
  },
    });
  };


  
  


  render() {
    const {task, tasks }  = this.state;

    return(
     <div>
       <form onSubmit={this.onSubmitTask}>
         <label htmlFor="taskInput"></label>
         <input 
           type="text" 
           id="taskInput"
           onChange={this.handleChanges}
           value={task.text}
           placeholder="Enter Task"
           />
         <button type="submit">
           Add Task
         </button>
       </form>
       <Overview
         tasks={tasks}
         />
     </div>
    )
 }

}

export default App;


