import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import AprovalCard from "./AprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            {/* You can pass not only components but multiple html elements as well */}
            <AprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this</p>
                    <br />
                </div>
            </AprovalCard>
            <AprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:54 PM" 
                    picture={faker.image.avatar()} 
                    content="Awsome  blog" 
                />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 11:40 AM" 
                    picture={faker.image.avatar()} 
                    content="Love your blog" 
                />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 8:00 PM" 
                    picture={faker.image.avatar()} 
                    content="Amazing blog" 
                />
            </AprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("root"));