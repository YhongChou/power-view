import {createSlice} from '@reduxjs/toolkit';

// 用户数据
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: 'yazai',
        role: '',
        group: ['user', 'admin'],
        isLoggedIn: false,
        isLoading: true,
    },
    reducers: {
        setUser(state, action) {
          // 可以直接修改state，不返回值
            state.user = action.payload;
        },
        // 传统写法
        setAuth(state, action) {
          return {
            ...state,
            auth: action.payload,
          }
        },
      }
});

export default userSlice;
