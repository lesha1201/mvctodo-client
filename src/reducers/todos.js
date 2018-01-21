import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, DELIVER_TODOS } from '../types';

export default function todos(state = [], action) {
   switch(action.type) {
		case DELIVER_TODOS:
			return state.concat(action.todos);
      case ADD_TODO:
         return [ ...state, action.todo ];
		case COMPLETE_TODO:
         return state.map(todo => 
            todo._id === action.id
               ? {...todo, completed: !todo.completed}
               : todo
         );
      case DELETE_TODO:
         return state.filter(todo =>
            todo._id !== action.id
         );
      case EDIT_TODO:
         return state.map(todo =>
            todo._id === action.id
               ? {...todo, text: action.text}
               : todo
         );
      default:
         return state;
   }
}