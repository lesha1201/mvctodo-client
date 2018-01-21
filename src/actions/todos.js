import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, DELIVER_TODOS } from '../types';
import api from '../api';

export const addTodo = todo => ({ type: ADD_TODO, todo });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text });
export const deliverTodos = todos => ({ type: DELIVER_TODOS, todos });

export const fetchTodos = () => dispatch =>
	api.todos.fetchAll()
		.then(todos => dispatch( deliverTodos(todos) ));

export const postTodo = task => dispatch =>
	api.todos.postTodo(task)
		.then(todo => dispatch( addTodo(todo) ));

export const removeTodo = id => dispatch =>
	api.todos.removeTodo(id)
		.then(() => dispatch( deleteTodo(id) ));

export const updateTodo = (id, data) => () =>
	api.todos.updateTodo(id, data)