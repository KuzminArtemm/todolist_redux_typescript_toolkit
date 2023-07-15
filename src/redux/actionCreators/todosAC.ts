import { nanoid } from 'nanoid';

import { Todo } from '../../interfaces/interfaces';
import {
  AddNewTodoAction,
  CompletedTodoAction,
  DeleteTodoAction,
  TodosActionTypes
} from '../types/todoType';

export const deleteTodoAC = (id: Todo['id']): DeleteTodoAction => ({
  type: TodosActionTypes.DELETE_TODO,
  payload: id
});

export const addTodoAC = (text: string): AddNewTodoAction => ({
  type: TodosActionTypes.ADD_NEW_TODO,
  payload: {
    id: nanoid(),
    title: text,
    completed: false
  }
});

export const completedTodoAC = (id: Todo['id']): CompletedTodoAction => ({
  type: TodosActionTypes.COMPLETED_TODO,
  payload: id
});
