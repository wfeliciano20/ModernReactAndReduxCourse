import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends Component {
        state = { images: [] };

        onSearchSubmit = async (term) =>{
            const response = unsplash.get('/search/photos',{
                params: { query: term }
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