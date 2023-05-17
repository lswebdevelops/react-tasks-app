import React from "react";
import "../Styles/Components.css";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.id}>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              x
            </button>
            <li>{task.text}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
