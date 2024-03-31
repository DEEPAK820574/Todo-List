const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case 'DELETE_TASK':
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'LOAD_TASKS':
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      return {
        ...state,
        tasks: storedTasks,
      };
    case 'TOGGLE_TASK':
      const toggleTasks = state.tasks.map(task =>
      task.id === action.payload ? { ...task, completed: !task.completed } : task
       );
       localStorage.setItem('tasks', JSON.stringify(toggleTasks));
      return {
       ...state,
      tasks: toggleTasks,
     };
    default:
      return state;
  }
};

export default reducer;