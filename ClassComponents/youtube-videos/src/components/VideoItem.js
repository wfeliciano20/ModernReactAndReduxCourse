import React from "react";
import "./VideoItem.css";

const VideoItem = ({ vid, onVideoSelect }) => {
    const { title, thumbnails } = vid.snippet;
    return (
        <div className="video-item item" onClick={() => onVideoSelect(vid)}>
            <img className="ui image" alt={title} src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
