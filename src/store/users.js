import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    userInfomRequested: (user, action) => {
      user.loading = true;
    },
    userInfomReceived: (user, action) => {
      user.list = action.payload;
      user.loading = false;
      user.lastFetch = Date.now();
    },
    userInfomRequestFailed: (user, action) => {
      user.loading = false;
    },
  },
});

export const { userInfomRequested, userInfomReceived, userInfomRequestFailed } =
  userSlice.actions;
export default userSlice.reducer;

export const loadAllUsers = () =>
  apiCallBegan({
    url: '/v1/users/get_all_user',
    onStart: userInfomRequested.type,
    onSuccess: userInfomReceived.type,
    onError: userInfomRequestFailed.type,
  });

export const selectNumberOfPosts = (state) => {
  const userWithPosts = state.user.list.map((aUser) => ({
    ...aUser,
    numOfPosts: aUser.posts.length,
    image: 'default-user.jpg',
  }));

  return userWithPosts;
};
