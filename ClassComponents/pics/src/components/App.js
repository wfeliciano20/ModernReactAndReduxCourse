import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends Component {
        state = { images: [] };

        onSearchSubmit = async (term) =>{
            try {
                const response = await unsplash.get('/search/photos',{
                params: { query: term }
            });
            this.setState({ images: (response).data.results });
            } catch (error) {
                console.log(error);
            }
            
        
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;