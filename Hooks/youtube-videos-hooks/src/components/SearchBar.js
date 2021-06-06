import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState("");

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search Bar</label>
                    <input
                        onChange={onInputChange}
                        value={term}
                        type="text"
                        placeholder="Search for your favorite video"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
