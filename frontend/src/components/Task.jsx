import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Task = ({ task, handleDelete }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status:{task.completed ? "Completed" : "Pending"}</p>
      <Link to={`/edit/${task._id}`}>Edit</Link>
      <button onClick={() => handleDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
