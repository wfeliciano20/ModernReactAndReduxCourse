import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser }) => {
    useEffect(() => {
        fetchUser(userId);
    }, [fetchUser, userId]);
    return <div>UserHeader</div>;
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
