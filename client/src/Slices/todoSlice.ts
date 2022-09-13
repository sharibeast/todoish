import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  id: Date;
  todo: string;
  completed: boolean;
}

const initialTodoState: TodoState[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoState = {
        completed: false,
        todo: action.payload,
        id: new Date(),
      };
      state.push(newTodo);
    },
    //     deleteTodo: (state, action: PayloadAction<number>) => {
    //       return state.filter((todo, id) => todo.todo !== action.payload);

    //       //     const newTasks = tasks.filter(todo => todo.id !== id)
    //     },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
