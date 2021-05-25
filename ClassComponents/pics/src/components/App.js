import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
require('dotenv').config();

class App extends Component {
        state = { images: [] };

        onSearchSubmit = async (term) =>{
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = axios.get('https://api.unsplash.com/search/photos',{
                params: { query: term },
                headers: {
                    Authorization: `Client-ID ${apiKey}`
                }
        });
        this.setState({ images: (await response).data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <p>Found: {this.state.images.length} images</p>
            </div>
        )
    }
}

export default App;