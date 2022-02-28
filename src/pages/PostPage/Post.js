import React,{ useState, useEffect}from "react";
import './Post.css';
import CreateImage from "../../static/images/New_Topic.svg"
//action
import { connect } from "react-redux";

import {changePost} from "../../actions";

function Post(props){
    const defaultPost = {
        title:"",
        category:"",
        subCategory:"",
        description:"",
        tags:[],
        auth:""
    }
    const [postContent,setPostContent] = React.useState(defaultPost);

    const handleOnChange = (event) => {
        const target = event.target;
        const value = String.prototype.trim.call(target.value);
        const name = target.name;
        switch(name){
            case "title":
                setPostContent((preState)=>({
                    ...preState,
                    "title":value
                }));
                break;
            case "description":
                setPostContent((preState)=>({
                    ...preState,
                    "description":value
                }));    
                break;
            case "tags":
                const tages = value.split(",");
                setPostContent((preState)=>({
                    ...preState,
                    "tags":tages
                }));
                break;
            case "auth":
                setPostContent((preState)=>({
                    ...preState,
                    "auth":value
                }));    
                break;
            case "category":
                  setPostContent((preState)=>({
                    ...preState,
                    "category":value
                }));    
                break;
            case "subCategory":
                  setPostContent((preState)=>({
                    ...preState,
                    "subCategory":value
                }));    
                break;    
            default:setPostContent(postContent);
        }
    }

    const handleSubmit = () =>{
        const {changePost} = props;
        changePost(postContent);
    }
    
    return (
        <div className="postPage"> 
            <hr></hr>    
            <header className="postPage__header">
                <img src={CreateImage}></img>
                <p>Create New Thread</p>
                <span>Forum Guidelines</span>
            </header>
            <form>
                <div className="postPage__setTitle">
                    <h1>Thread Title</h1>
                    <input onChange={handleOnChange} type="text"  id="title" name="title" placeholder="Add here"></input>
                </div>
                <div className="postPage__setCategory">
                    <div className="postPage__setCategory__select">
                        <h1>Select Category</h1>    
                        <select id="category" name="category" onChange={handleOnChange}>
                            <option value="Choose">Choose</option>
                            <option value="Choose2">Choose #2</option>
                            <option value="Choose3">Choose #3</option>
                        </select>
                    </div>
                    <div className="postPage__setCategory__select">
                        <h1>Select Sub Category</h1> 
                        <select name="subCategory" onChange={handleOnChange}>
                            <option value="Choose">Choose</option>
                            <option value="Choose2">Choose #2</option>
                            <option value="Choose3">Choose #3</option>
                        </select> 
                    </div>
                </div>
                <div className="postPage__setDescription">
                    <h1>Description</h1>
                    <div className="postPage__setDescription__writeSpace">
                        <textarea onChange={handleOnChange} name="description" className="form-control" id="description" placeholder="Adding amazing books to your summer reading list can be as simple as signing up for the BuzzFeed Books newsletter! You'll get a review of a new book you might love every Wednesday, plus much more twice a week: great jokes and quizzes, wonderful lists, powerful essays, all the Harry Potter and YA buzz you can handle, and of course, even more book recommendations. So make some space in your beach bag now — because you're going to have a lot to read this summer."></textarea>
                    </div>
                </div>
                <div className="postPage__setTags">
                    <h1>Add Tags</h1>
                    <input type="text" onChange={handleOnChange} name="tags" placeholder="e.g. nature, science"></input>
                </div>
                <div className="postPage__settings">
                    <div className="postPage__settings__whoCanSee">
                        <h1>Who can see this?</h1> 
                        <div>
                            <input onChange={handleOnChange} type="radio" value="Everyone" name="auth" /> Everyone
                            <input onChange={handleOnChange} type="radio" value="Friends" name="auth" /> Only Friends
                        </div>                  
                    </div>
                    {/* <div className="postPage__settings__share">
                        <h1>Share on Social?</h1>
                    </div>
                    <div className="postPage__settings__matureThread">
                        <h1>Is this a Mature Thread?</h1>
                    </div> */}
                </div>
                <div className="postPage__submit">
                        <a href="#" className="postPage__submit__cancel">Cancel</a>
                        <a href="#" className="postPage__submit__submit" onClick={handleSubmit}>Create Thread</a>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    // console.log(state)
    const {
        post:{title,category,subCategory,description,tags,auth},
    }=state;
    // console.log(username)
    return {
        title,
        category,
        subCategory,
        description,
        tags,
        auth,
    }
}

const mapActionToProps = {
    changePost,
}

export default connect(mapStateToProps, mapActionToProps)(Post);