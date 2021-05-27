import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
export default class App extends Component {
    state = {
        videps:[]
    };

    onSearchSubmit = (term) => {
        console.log(term);
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}
