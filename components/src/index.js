import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import AprovalCad from "./AprovalCad";

const App = () => {
    return (
        <div className="ui container comments">
            <AprovalCad>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:54 PM" 
                    picture={faker.image.avatar()} 
                    content="Awsome  blog" 
                />
            </AprovalCad>
            <AprovalCad>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 11:40 AM" 
                    picture={faker.image.avatar()} 
                    content="Love your blog" 
                />
            </AprovalCad>
            <AprovalCad>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 8:00 PM" 
                    picture={faker.image.avatar()} 
                    content="Amazing blog" 
                />
            </AprovalCad>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("root"));