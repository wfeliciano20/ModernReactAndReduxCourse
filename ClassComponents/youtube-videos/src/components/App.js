import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
export default class App extends Component {
    state = {
        videos:[]
    };

    onSearchSubmit = async (term) => {
        try {
            let response = await youtube.get('/search',
            {
                params:{
                    q: term
                }
            }
            );
            this.setState({videos:response.data.items});
            console.log(this.state.videos.length);
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}
