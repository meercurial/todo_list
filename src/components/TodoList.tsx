import { FilterValuesType, Task } from '../App';
import { Button } from './button/Button';
import { TaskEl } from './TaskEl';

type TodoListTypeProps = {
  tasks: Task[];
  removedTask: (id: number) => void;
  changeFilter: (filter: FilterValuesType) => void;
};

export const TodoList = ({ tasks, removedTask, changeFilter }: TodoListTypeProps) => {
  const mappedTasks = !tasks.length ? (
    <div>Empty</div>
  ) : (
    tasks.map((el) => {
      return <TaskEl key={el.id} {...el} removedTask={removedTask} changeFilter={changeFilter} />;
    })
  );

  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input />
        <Button title={'+'} />
      </div>
      {tasks.length === 0 ? <p>Тасок нет</p> : <ul>{mappedTasks}</ul>}
      <div>
        <Button title={'All'} onClick={() => changeFilter('All')} />
        <Button title={'Active'} onClick={() => changeFilter('Active')} />
        <Button title={'Completed'} onClick={() => changeFilter('Completed')} />
      </div>
      <div />
    </div>
  );
};
