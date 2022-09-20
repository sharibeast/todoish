import { configureStore, } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoSlice from './Slices/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks:todoSlice
  },
});

export type Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
