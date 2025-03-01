import React, { useState } from 'react';
import { addTasks } from '../service/api';  // Move up one level to access api.js


const AddTaskForm = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      task,
      description,
      dueDate,
      completed
    };

    try {
      await addTasks(newTask);
      // Reset form fields
      setTask('');
      setDescription('');
      setDueDate('');
      setCompleted(false);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
