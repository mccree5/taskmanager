const url = 'http://localhost:8080/to-do-list';  // Base URL for the backend

export const getTasks = async () => {
    try {
        const response = await fetch(url + "/allTasks");
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;  // Return the list of tasks
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

export const addTasks = async (newTask) => {
    try {
        const response = await fetch(url + "/addTasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask)
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;  // Return the newly added task
        }
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

export const updateTasks = async (id, updatedTasks) => {
    try {
        const response = await fetch(url + `/${id}`, {  // Correct endpoint to update by ID
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTasks)
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;  // Return the updated task
        }
    } catch (error) {
        console.error('Error updating task:', error);
    }
};

export const deleteTasks = async (taskId) => {
    try {
        const response = await fetch(`${url}/deleteTask/${taskId}`, {  // Correct endpoint to delete by ID
            method: 'DELETE'
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;  // Return the deleted task (optional)
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}
