import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:54 PM" 
                picture={faker.image.avatar()} 
                content="Awsome  blog" 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 11:40 AM" 
                picture={faker.image.avatar()} 
                content="Love your blog" 
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 8:00 PM" 
                picture={faker.image.avatar()} 
                content="Amazing blog" 
            />
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("root"));