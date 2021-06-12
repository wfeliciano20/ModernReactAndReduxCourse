import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, user }) => {
    useEffect(() => {
        fetchUser(userId);
    }, [fetchUser, userId]);

    const renderUser = () => {
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    };

    return renderUser();
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
