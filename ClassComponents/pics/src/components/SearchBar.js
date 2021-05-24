import React, { Component } from 'react'

class SearchBar extends Component {

    onInputChange(event){
        const { value } = event.target
        console.log('Input change: ' + value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                            <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;