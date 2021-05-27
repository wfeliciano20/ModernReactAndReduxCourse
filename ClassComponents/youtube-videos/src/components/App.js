import React, { Component } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    onSearchSubmit = async (term) => {
        try {
            let response = await youtube.get("/search", {
                params: {
                    q: term,
                },
            });
            this.setState({ videos: response.data.items });
        } catch (error) {
            console.log(error);
        }
    };

    onVideoSelect = (video) => {
        console.log("Called from App:", video);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
