import { useAppSelector } from '../../hooks/hooks';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const reduxStore = useAppSelector((store) => store.todos);

  return (
    <div>
      {reduxStore.length ? (
        reduxStore.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            index={index}
          />
        ))
      ) : (
        <p>list is empty</p>
      )}
    </div>
  );
};

export default TodoList;
