import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui-segment">
                <form className="ui-form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Bar</label>
                        <input 
                        onChange={this.onInputChange} 
                        value={this.state.term} 
                        type='text' 
                        placeholder="Search for your favorite video" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}
