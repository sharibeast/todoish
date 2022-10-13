import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import otherStateReducer from './formSlice';
import todoSlice from './Slices/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: todoSlice,
    otherStates: otherStateReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
