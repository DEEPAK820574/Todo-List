// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { loadTasks } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="container-lg mt-5 mb-5 pb-4 px-4 card text-white bg-secondary mb-3 ">
      <h1 className=' text-center mt-2 mb-2'>My Tasks</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

