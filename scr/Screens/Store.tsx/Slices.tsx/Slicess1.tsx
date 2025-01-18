import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userName: string | null;
  email: string;
}

const initialState: UserState = {
  userName: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
      console.log('Received action payload:', action.payload);
      state.email = action.payload.email;
      
    },
    clearUser: (state) => {
      state.userName = '';
      state.email = '';
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

