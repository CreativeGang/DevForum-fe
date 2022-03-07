import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { postRequested, postReceived, postRequestFailed } from './posts';
export const loadFilter = (param) =>
  apiCallBegan({
    url: '/v1/post',
    onStart: postRequested.type,
    onSuccess: postReceived.type,
    onError: postRequestFailed.type,
    params: param,
  });

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterType: '',
  },
  reducers: {
    filterAdded: (filter, action) => {
      filter.filterType = action.payload.Params;
    },
    filterChanged: (filter, action) => {
      filter.filterType = action.payload.Params;
    },
  },
});
export const { filterAdded } = filterSlice.actions;
export default filterSlice.reducer;
