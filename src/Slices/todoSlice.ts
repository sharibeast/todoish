import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
  id: number;
  todo: string;
  completed: boolean;
}

// export interface Task {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// type Store = {
//   count: number;
//   store: Task[];
// };
// const initial: Store = {
//   count: 0,
//   store: [],
// };
const initialTodoState: TodoState[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoState = {
        id: uuidv4(),
        completed: false,
        todo: action.payload,
      };
      state.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    },
    updateEditedTodo: (state, action: PayloadAction<{ id: number; todo: string }>) => {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        console.log(current(state));
        return { ...todo, todo: action.payload.todo };
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateEditedTodo } = todoSlice.actions;

export default todoSlice.reducer;
