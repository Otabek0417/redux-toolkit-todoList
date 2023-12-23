import { createSlice } from "@reduxjs/toolkit";
const todosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const state = {
  todos: todosLocalStorage(),
  completed: 0,
  uncompleted: 0,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: state,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, { payload }) => {
      const filterTodos = state.todos.filter((todo) => todo.id !== payload);
      state.todos = filterTodos;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, { payload }) => {
      const filterCompleted = state.todos.find((todo) => todo.id === payload);
      filterCompleted.completed = !filterCompleted.completed;

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    statistic: (state) => {
      let completedCounter = 0;
      let unCompletedCounter = 0;
      state.todos.forEach((todo) => {
        if (todo.completed) completedCounter++;
        else unCompletedCounter++;

        state.completed = completedCounter;
        state.uncompleted = unCompletedCounter;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, statistic } =
  todoSlice.actions;

export default todoSlice.reducer;
