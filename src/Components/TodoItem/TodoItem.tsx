import { useAppDispatch } from '../../hooks/hooks';
import {
  completedTodoAC,
  deleteTodoAC
} from '../../redux/actionCreators/todosAC';

interface ItemProps {
  id: string;
  title: string;
  completed: boolean;
  index: number;
}

const TodoItem = ({ title, completed, index, id }: ItemProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoAC(id));
  };

  const handleCompleted = () => {
    dispatch(completedTodoAC(id));
  };
  return (
    <>
      <div
        className={
          completed ? 'card bg-dark-subtle my-4' : 'card bg-success-subtle my-4'
        }
        style={{ width: '55rem' }}
      >
        <div className="card-header">{index + 1}.</div>
        <div className="card-body d-flex justify-content-between">
          <p className="card-text">{title}</p>
          <div>
            <button onClick={handleDelete} className="btn btn-danger mx-2">
              delete
            </button>
            <button onClick={handleCompleted} className="btn btn-secondary">
              {completed ? 'completed' : 'active'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
