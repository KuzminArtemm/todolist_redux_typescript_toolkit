import { Todo } from '../../interfaces/interfaces';

export enum TodosActionTypes {
  ADD_NEW_TODO = 'ADD_NEW_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETED_TODO = 'COMPLETED_TODO'
}

export interface AddNewTodoAction {
  type: TodosActionTypes.ADD_NEW_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: Todo['id'];
}

export interface CompletedTodoAction {
  type: TodosActionTypes.COMPLETED_TODO;
  payload: Todo['id'];
}

export type UnionActionTodos =
  | AddNewTodoAction
  | DeleteTodoAction
  | CompletedTodoAction;
