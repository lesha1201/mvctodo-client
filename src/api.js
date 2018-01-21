import axios from 'axios';

const url = 'http://mvctodo-api-mvctodo-api.1d35.starter-us-east-1.openshiftapps.com';

export default {
	todos: {
		fetchAll: () =>
			axios.get(`${url}/api/todos`).then(res => res.data.todos),
		postTodo: (task) =>
			axios.post(`${url}/api/todos`, task).then(res => res.data.todo),
		removeTodo: (id) =>
			axios.delete(`${url}/api/todos/${id}`),
		updateTodo: (id, data) => 
			axios.put(`${url}/api/todos/${id}`, data)
	}
}