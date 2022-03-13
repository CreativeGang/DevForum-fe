export const changePost = (postContent) =>{
    return{
        type:"CHANGE_POST",
        postContent,
    };
};

export const createPost = () => {
    return{
        type: "CREAT_POST",
    }
}