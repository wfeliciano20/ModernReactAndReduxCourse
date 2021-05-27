import React, { Component } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        this.onSearchSubmit("youtube");
    }

    onSearchSubmit = async (term) => {
        try {
            let response = await youtube.get("/search", {
                params: {
                    q: term,
                },
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0],
            });
        } catch (error) {
            console.log(error);
        }
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
