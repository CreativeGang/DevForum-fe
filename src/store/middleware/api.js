import axios from 'axios';
import * as actions from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError, params } =
      action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
      const response = await axios.request({
        baseURL: process.env.REACT_APP_API_URL,
        url,
        method,
        data,
        params,
      });
      //General
      dispatch(actions.apiCallSuccess(response.data));
      //specific

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
