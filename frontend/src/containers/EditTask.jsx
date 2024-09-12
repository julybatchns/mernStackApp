import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTasks, updateTask } from "../api";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getTasks(id);
      setTask(data);
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h1>Edit Task</h1>
      <input
        type="text"
        value={task.title || ""}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        value={task.description || ""}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
