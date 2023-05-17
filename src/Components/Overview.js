import React from "react";
import "../Styles/Components.css";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.id}>
            <li className="li-task-container">{task.text}</li>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
              x
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
