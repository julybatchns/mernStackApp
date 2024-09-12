import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";
import Task from "../components/Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Task key={task._id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
