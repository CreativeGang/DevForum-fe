const initialPost = {
    title:"",
    category:"",
    subCategory:"",
    description:"",
    tags:[],
    auth:"",
};

export const post = (state = initialPost, action)=>{
    switch(action.type){
        case "CHANGE_POST":
            console.log(action.postContent)
            return {
                ...state,
                title:action.postContent.title,
                category:action.postContent.category,
                subCategory:action.postContent.subCategory,
                description:action.postContent.description,
                tags:action.postContent.tags,
                auth:action.postContent.auth,
            };
        

        default:
            return state;
    }
}