// src/store/slices/pomodoroSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface PomodoroState {
  isVisible: boolean;
  time: string;
  progress: number;
  tags: string[];
}

const initialState: PomodoroState = {
  isVisible: true,
  time: '08:02',
  progress: 60,
  tags: ['r', 'w', 'w', 'r', 't'],
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    updateProgress: (state, action) => {
      state.progress = action.payload;
    },
    squash: (state) => {
      state.progress = 0;
    },
  },
});

export const { setVisibility, updateProgress, squash } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
