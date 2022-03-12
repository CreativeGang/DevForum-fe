import React from "react";

function User({content}){

    return(
        <div className="userPart">
            <div className="userPart_img">
                <img src={require(`../../static/images/${content.image}`)} alt="user-image"></img>
            </div>
            <div className="userPart__details">
                <h2>{content.username}</h2>
                <h3>{content.firstname}</h3>
                <h4>{content.numOfPost}</h4>
                <ul>
                    {content.program.map((program,index)=>{
                        return <li key={index}>{program}&nbsp;&nbsp;</li>
                    })}
                </ul>
                
            </div>            
        </div>
    )
}

export default  User;