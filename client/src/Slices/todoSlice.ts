import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  // id: Date;
  todo: string;
  completed: boolean;
}

const initial = {
  count: 0,
  todos: [],
};
const initialTodoState: TodoState[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoState = {
        completed: false,
        todo: action.payload,
      };
      state.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      return state.map((todo, index) => {
        if (index !== action.payload) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo, index) => index !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
