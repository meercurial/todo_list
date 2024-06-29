import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = 'All' | 'Active' | 'Completed';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ]);
  const [filter, setFilter] = React.useState<FilterValuesType>('All');

  let tasksFiltered = tasks;

  const filterTasks = (filter: FilterValuesType) => {
    if (filter === 'Active') {
      tasksFiltered = tasks.filter((task) => !task.isDone);
    }

    if (filter === 'Completed') {
      tasksFiltered = tasks.filter((task) => task.isDone);
    }
  };

  const changeFilter = (filter: FilterValuesType) => {
    setFilter(filter);
  };

  const removedTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    return setTasks(filteredTasks);
  };
  return (
    <div className="App">
      <TodoList tasks={tasks} removedTask={removedTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
