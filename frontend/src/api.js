import Axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTasks = () => Axios.get(`${API_URL}/tasks`);
export const createTask = (task) => Axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, updatedTask) =>
  Axios.put(`${API_URL}/tasks/${id}`, updatedTask);
export const deleteTask = (id) => Axios.delete(`${API_URL}/tasks/${id}`);
