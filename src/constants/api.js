export const API_URL = 'https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/tabs';

export const getTodo = () =>
    fetch(API_URL).then(response => response.json());

export const deleteTodoAPI = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

export const editTodoAPI = (todo) => {
    return fetch(`${API_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    }).then(response => response.json());
}

export const createTodoAPI = (todo) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then(response => response.json());
}