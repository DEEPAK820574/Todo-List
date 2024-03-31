import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4 text-center">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-center">There is no task</p>
      ) : (
        <ul className="list-group">
          {tasks.map(task => (
            <li key={task.id} className="list-group-item list-group-item-info">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                      className="form-check-input"
                    />
                    <label className="form-check-label" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.text}
                    </label>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
