import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: ''};

    onInputChange(event){
        const { value } = event.target
        this.setState({ term: value});
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                            <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            value={this.state.term}
                            />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;