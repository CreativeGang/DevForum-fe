const initialPost = {
  title: '',
  category: '',
  subCategory: '',
  description: '',
  tags: [],
  auth: '',
};

export const post = (state = initialPost, action) => {
  switch (action.type) {
    case 'CHANGE_POST':
      console.log(action.postContent);
      return {
        ...state,
        ...action.postContent,
      };

    default:
      return state;
  }
};
