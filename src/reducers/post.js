const initialPost = {
  title: '',
  category: '',
  subCategory:  '',
  description: '',
  tags: [],
  auth: '',
  loading: true
};

export const post = (state = initialPost, action) => {
  const {type, payload} = action
  switch (action.type) {
    case 'CHANGE_POST':
      return {
        ...state,
        ...action.postContent,
      };
  
        case 'GET_POST':
          return {
            ...state,
            loading: false
          };
    

    default:
      return state;
  }
};
