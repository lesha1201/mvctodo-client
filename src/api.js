import axios from 'axios';

export default {
	todos: {
		fetchAll: () =>
			axios.get('/api/todos').then(res => res.data.todos),
		postTodo: (task) =>
			axios.post('/api/todos', task).then(res => res.data.todo),
		removeTodo: (id) =>
			axios.delete(`/api/todos/${id}`),
		updateTodo: (id, data) => 
			axios.put(`/api/todos/${id}`, data)
	}
}