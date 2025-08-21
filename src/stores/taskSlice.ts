import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export enum TaskStatus {
  IDLE = 'idle',
  DOING = 'doing',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export enum TaskType {
  TODO = 'todo',
  LIST = 'list',
  CIRCLE = 'circle',
}

export type Task = {
  id: string;
  type: TaskType;
  title: string;
  completed: boolean;
  completedAt: number | null;
  createdAt: number;
  estimatedPomodoros: number;
  completedPomodoros: number;
  status?: TaskStatus;
};

// 创建任务的参数类型，不包含自动生成的字段
export type CreateTaskParams = Omit<
  Task,
  'id' | 'completed' | 'completedAt' | 'createdAt' | 'completedPomodoros'
>;

const initialState: Task[] = [
  {
    id: '1',
    type: TaskType.TODO,
    title: '番茄 store 配置',
    completed: false,
    completedAt: null,
    createdAt: Date.now(),
    estimatedPomodoros: 3,
    completedPomodoros: 1,
  },
  {
    id: '2',
    type: TaskType.TODO,
    title: '列出活动清单',
    completed: false,
    completedAt: null,
    createdAt: Date.now(),
    estimatedPomodoros: 2,
    completedPomodoros: 0,
  },
];

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CreateTaskParams>) => {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        completed: false,
        completedAt: null,
        createdAt: Date.now(),
        completedPomodoros: 0,
      };
      state.push(newTask);
    },
    startTask: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.status = TaskStatus.DOING;
      }
    },
    updateTask: (
      state,
      action: PayloadAction<Partial<Task> & { id: string }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = true;
        task.completedAt = Date.now();
        task.status = TaskStatus.SUCCEEDED;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    incrementPomodoro: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completedPomodoros += 1;
      }
    },
    resetTask: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = false;
        task.completedAt = null;
        task.status = TaskStatus.IDLE;
        task.completedPomodoros = 0;
      }
    },
  },
});

export const {
  addTask,
  startTask,
  updateTask,
  completeTask,
  deleteTask,
  incrementPomodoro,
  resetTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
