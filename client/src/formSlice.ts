import { createSlice } from '@reduxjs/toolkit';
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
    editingForm: (state, action: PayloadAction<boolean>) => {
      return { ...state, showAddTaskForm: action.payload };
    },
  },
});

export const { editingForm } = otherStateSlice.actions;
export const selectOtherState = (state: Rootstate) => state.otherStates;
export default otherStateSlice.reducer;
