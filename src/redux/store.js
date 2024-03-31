// src/redux/store.js
import { createStore } from 'redux';
import reducer from './reducer';
import { loadTasks } from './actions';

const store = createStore(reducer);

// Dispatch the loadTasks action to load tasks from local storage
store.dispatch(loadTasks());

export default store; // Ensure that store is exported as default
