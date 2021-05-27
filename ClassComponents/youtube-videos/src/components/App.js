import React, { Component } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
export default class App extends Component {
    state = {
        videos: [],
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

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
