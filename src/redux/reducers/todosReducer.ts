import { Todo } from '../../interfaces/interfaces';
import { TodosActionTypes, UnionActionTodos } from '../types/todoType';

const initTodoState: Array<Todo> = [];

export const todosReducer = (
  state = initTodoState,
  action: UnionActionTodos
) => {
  switch (action.type) {
    case TodosActionTypes.ADD_NEW_TODO:
      return [...state, action.payload];
    case TodosActionTypes.DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case TodosActionTypes.COMPLETED_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
