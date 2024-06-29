import { FilterValuesType, Task as TaskType } from '../App';
import { Button } from './button/Button';

interface Task extends TaskType {
  removedTask: (id: number) => void;
  changeFilter: (filter: FilterValuesType) => void;
}

export const TaskEl = ({ id, title, isDone, removedTask }: Task) => {
  return (
    <li key={id}>
      <input type="checkbox" checked={isDone} />
      <span>{title}</span>
      <Button title={'x'} onClick={() => removedTask(id)} />
    </li>
  );
};
