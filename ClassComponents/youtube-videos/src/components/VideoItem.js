import React from "react";

const VideoItem = (props) => {
    const { title, thumbnails } = props.vid.snippet;
    return (
        <div className="item">
            <img className="ui image" alt={title} src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
