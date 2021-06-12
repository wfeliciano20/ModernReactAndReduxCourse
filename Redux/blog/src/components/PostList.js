import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ posts, fetchPosts }) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const renderList = () => {
        return posts.map(({ id, userId, title, body }) => {
            return (
                <div className="item" key={id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                        <UserHeader userId={userId} />
                    </div>
                </div>
            );
        });
    };

    return <div className="ui relaxed divided list">{renderList()}</div>;
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
