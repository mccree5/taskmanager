import React from 'react';
import { Route, Routes } from 'react-router-dom'; // CORRECT I';  
import AddTaskForm from './components/taskform'; 
import TaskList from './components/tasklist';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <Routes>
        <Route path="/" element={<TaskList />} />  {/* List of tasks */}
        <Route path="/add" element={<AddTaskForm />} />  {/* Form to add new task */}
      </Routes>
    </div>
  );
};

export default App;
