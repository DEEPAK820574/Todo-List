// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false })); // Include completed property
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control mt-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter task..."
        maxLength={75}
        aria-describedby="button-addon2"
      />
      <button onClick={handleAddTask}
       className="btn btn-success mt-2"
       id="button-addon2"
       >Add Task</button>
    </div>
   
  );
};

export default TaskInput;
