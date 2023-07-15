import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addTodoAC } from '../../redux/actionCreators/todosAC';

const Form = () => {
  const dispatch = useAppDispatch();
  const reduxStore = useAppSelector((store) => store.todos);
  console.log({ reduxStore });
  const initialState: string = '';
  const [text, setText] = useState(initialState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo = text.trim();
    if (newTodo) {
      dispatch(addTodoAC(newTodo));
      setText('');
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTodo = text.trim();
      if (newTodo) {
        dispatch(addTodoAC(newTodo));
        setText('');
      }
    }
  };
  return (
    <div style={{ width: '500px' }} className="input-group mb-3">
      <input
        value={text}
        onChange={changeHandler}
        type="text"
        className="form-control"
        placeholder="type your task"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onKeyDown={handleEnter}
      />
      <button
        onClick={handlerSubmit}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        add task
      </button>
    </div>
  );
};

export default Form;
