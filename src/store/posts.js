import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import moment from 'moment';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    postRequested: (posts, action) => {
      posts.loading = true;
    },
    postReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
      posts.lastFetch = Date.now();
    },
    postRequestFailed: (posts, action) => {
      posts.loading = false;
    },
    postAdded: (posts, action) => {
      posts.list.push(action.payload);
    },
    postResolved: (posts, action) => {
      const index = posts.list.findIndex(
        (post) => post.id === action.payload.id
      );
      posts.list[index].resolved = true;
    },
    postRemoved: (posts, action) => {
      return posts.list.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { postRequested, postReceived, postRequestFailed } =
  postSlice.actions;
export default postSlice.reducer;

export const loadPosts = () =>
  apiCallBegan({
    url: '/v1/post',
    onStart: postRequested.type,
    onSuccess: postReceived.type,
    onError: postRequestFailed.type,
  });

export const selectFirstNPosts = (state) => {
  const newPost = state.posts.list.map((post) => ({
    ...post,
    date: moment(post.date).format('DD MMM YYYY').toString(),
  }));
  return newPost.length <= 6 ? newPost : newPost.slice(0, 6);
};
