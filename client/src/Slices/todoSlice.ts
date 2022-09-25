import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  // id: number;
  todo: string;
  completed: boolean;
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Store = {
  count: number;
  store: Task[];
};
const initial: Store = {
  count: 0,
  store: [],
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
        if (index !== action.payload) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
        //   if (index !== action.payload) return todo;
        //   console.log(action.payload);
        //   return {
        //     ...todo,
        //     completed: !todo.completed,
        //   };
        // }
      });
      console.log(current(state));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo, index) => index !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
