import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import taskSlice from './taskSlice';
import pomodoroSlice  from "./pomodoroSlice";



const store = configureStore({
  // 合并reducer
  reducer: {
    user: userSlice.reducer,
    task: taskSlice,
    pomodoro: pomodoroSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;


export default store;
