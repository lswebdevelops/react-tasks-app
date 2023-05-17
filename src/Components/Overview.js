import React, { useState } from "react";
import "../Styles/Components.css";
import { FaRegTrashAlt, FaPen , FaSave } from "react-icons/fa";

const Overview = (props) => {
  const { tasks, deleteTask, editTask } = props;
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const handleEdit = (taskId) => {
    if (editedTaskId === taskId) {
      editTask(taskId, editedTaskText);
      setEditedTaskId(null);
      setEditedTaskText("");
    } else {
      const task = tasks.find((task) => task.id === taskId);
      setEditedTaskId(taskId);
      setEditedTaskText(task.text);
    }
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.id}>
            {editedTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button className="edit-button" onClick={() => handleEdit(task.id)}>
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <li className="li-task-container">{task.text}</li>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>
                  <FaRegTrashAlt />
                </button>
                <button className="edit-button" onClick={() => handleEdit(task.id)}>
                  <FaPen />
                </button>
              </>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
