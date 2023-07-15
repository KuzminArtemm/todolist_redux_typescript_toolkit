import styles from './todopages.module.css';
import Form from '../../Components/Form/Form';
import TodoList from '../../Components/TodoList/TodoList';

const TodoPages = () => {
  return (
    <div className={styles.conteiner}>
      <Form />
      <TodoList />
    </div>
  );
};

export default TodoPages;
