import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Rootstate } from './store';

export interface OtherState {
  showEditingForm: boolean;
  showAddTaskForm: boolean;
}

const initialState: OtherState = {
  showAddTaskForm: false,
  showEditingForm: false,
};

export const otherStateSlice = createSlice({
  name: 'otherState',
  initialState,
  reducers: {
    addTaskForm: (state, action: PayloadAction<boolean>) => {
      console.log(current(state));
      return { ...state, showAddTaskForm: action.payload };
    },
    editForm: (state, action: PayloadAction<boolean>) => {
      return { ...state, showEditingForm: action.payload };
    },
  },
});

export const { addTaskForm,editForm } = otherStateSlice.actions;
export const selectOtherState = (state: Rootstate) => state.otherStates;
export default otherStateSlice.reducer;
