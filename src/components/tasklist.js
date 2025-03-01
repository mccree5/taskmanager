import React, { useState, useEffect } from "react";
import { deleteTasks, getTasks, addTasks } from '../service/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    task: "",
    description: "",
    completed: false,
    dueDate: "",
  }); // State for new task input

  useEffect(() => {
    fetchTasks();
  }, []); // Fetch tasks once when the component mounts

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.log("Tasks could not be retrieved: " + error);
    }
  };

  // Delete task
  const handleDelete = async (taskId) => {
    try {
      await deleteTasks(taskId);
      fetchTasks(); // Refresh task list after deletion
    } catch (error) {
      console.log("Error deleting task: " + error);
    }
  };

  // Add new task
  const handleAddTasks = async (e) => {
    e.preventDefault();
    if (!newTask.task) return; // Don't add empty tasks

    const task = {
      task: newTask.task,
      description: newTask.description,
      completed: newTask.completed,
      dueDate: newTask.dueDate ? new Date(newTask.dueDate).toISOString() : "",
    };

    try {
      await addTasks(task); // Send new task to backend
      fetchTasks(); // Refresh task list after adding new task
      setNewTask({ task: "", description: "", completed: false, dueDate: "" }); // Clear input fields
    } catch (error) {
      console.log("Error adding task: " + error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
          
      <form onSubmit={handleAddTasks}>
        <input
          type="text"
          value={newTask.task}
          onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
          placeholder="Task"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          placeholder="Description"
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={newTask.completed}
            onChange={(e) =>
              setNewTask({ ...newTask, completed: e.target.checked })
            }
          />
        </label>
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Display Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - {task.description} - {task.dueDate}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
