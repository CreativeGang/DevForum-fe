export const changePost = (postContent) => {
  return {
    type: 'CHANGE_POST',
    postContent,
  };
};
