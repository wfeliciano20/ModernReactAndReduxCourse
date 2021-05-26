import React, { Component } from 'react';
import SearchBar from './SearchBar';
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
