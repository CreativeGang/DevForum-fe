import React from "react";
import NavBar from '../../common/layout/Navbar/index'
import Filter from '../../common/layout/Filter';
import User from "./User";
import './User.css'

function UsersPage(){

    const fakeData = [{
        username:'alex',
        firstname:"json",
        numOfPost:20,
        image:'default-user.jpg',
        program:['JavaScript','Java','PHP']
    },{
        username:'alex2',
        firstname:"json2",
        numOfPost:40,
        image:'default-user.jpg',
        program:['JavaScript','Java','PHP']
    }]

    return(
        <>
            <NavBar/>
            <Filter></Filter>
            <div className="usersPart">
                <User content={fakeData[0]}/>
                <User content={fakeData[1]}/>
                <User content={fakeData[0]}/>
                <User content={fakeData[1]}/>
                <User content={fakeData[0]}/>
                
                {fakeData.map((data,index)=>{
                    return <User key={index} content={data}/>
                })}
            </div>
            
            
        </>
    )
}

export default  UsersPage;