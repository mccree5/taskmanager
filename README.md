

# Task Management App

This is a simple Task Management App built using React for the front end and Spring Boot for the backend. The app allows users to add, view, and delete tasks with details such as description, due date, and completion status.

## Features

- Add new tasks with descriptions, due dates, and completion status.
- View all tasks in a list format with task name, description, and due date.
- Delete tasks from the list.
- Tasks are persisted in the backend, making it possible to manage tasks across sessions.

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot
- **State Management**: React's `useState` and `useEffect` hooks.
- **API Communication**: Fetch API

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js
- npm or yarn
- Java (JDK 11 or newer)
- Maven or Gradle (for Spring Boot backend)

### Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   # OR if you use yarn:
   yarn install
   ```

3. **Backend Setup (Spring Boot)**:
   - Navigate to your backend folder and make sure your Spring Boot application is set up to handle the following endpoints:
     - `GET /tasks` - Retrieves all tasks.
     - `POST /tasks` - Adds a new task.
     - `DELETE /tasks/{id}` - Deletes a task by ID.
     - `PUT /tasks/{id}` - Updates a task by ID (optional).
     
   - If you're using Maven, run the following command to start the Spring Boot backend:

     ```bash
     mvn spring-boot:run
     ```

   - If you're using Gradle, use this command instead:

     ```bash
     ./gradlew bootRun
     ```

4. Run the frontend:

   ```bash
   npm start
   # OR if you use yarn:
   yarn start
   ```

   Open the app in your browser at `http://localhost:3000`.

---

## Code Overview

### `TaskList.js`

The main component for displaying and managing tasks. It includes:

- **State** for holding tasks and input fields for new tasks.
- **`useEffect` hook** to fetch tasks from the backend when the component mounts.
- **`handleAddTasks`** to add new tasks to the list by sending a `POST` request to the backend.
- **`handleDelete`** to delete tasks by sending a `DELETE` request to the backend.

### `AddTaskForm.js`

The form component for adding a new task. It includes:

- **State** for holding the input values (task name, description, due date, and completion status).
- **`handleSubmit`** to submit the form and add a new task via a `POST` request.

### `api.js`

Handles communication with the backend:

- **`getTasks`** fetches all tasks.
- **`addTasks`** sends a new task to the backend.
- **`deleteTasks`** deletes a task by ID.
- **`updateTasks`** (optional) updates a task's details by ID.

---

## Folder Structure

```
/src
  /components
    AddTaskForm.js  # Form to add new tasks
    TaskList.js     # Display tasks and allow deleting
  /service
    api.js          # API functions to interact with backend
  App.js            # Main app component
  index.js          # Entry point for React app
  /styles
    App.css         # Styling for the app
```

---

## API Endpoints (Spring Boot)

Here are the backend Spring Boot API endpoints that need to be implemented:

### **GET /tasks**

Retrieves a list of all tasks.

**Response:**

```json
[
  {
    "id": 1,
    "task": "Sample Task",
    "description": "This is a sample task.",
    "completed": false,
    "dueDate": "2025-04-11T00:00:00"
  },
  ...
]
```

### **POST /tasks**

Adds a new task.

**Request body:**

```json
{
  "task": "New Task",
  "description": "Task description",
  "completed": false,
  "dueDate": "2025-04-12T00:00:00"
}
```

### **DELETE /tasks/{id}**

Deletes a task by its ID.

### **PUT /tasks/{id}**

Updates a task by its ID.

**Request body:**

```json
{
  "task": "Updated Task",
  "description": "Updated description",
  "completed": true,
  "dueDate": "2025-04-15T00:00:00"
}
```

---

## Contributing

Feel free to fork the repository, create an issue, or submit a pull request.

---

Let me know if you'd like me to adjust anything further!
