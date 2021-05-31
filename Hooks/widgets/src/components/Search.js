import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ onSubmit }) => {
    const [term, setTerm] = useState("");

    const onInputChange = (event) => {
        const { value } = event.target;
        setTerm(value);
    };

    useEffect(() => {
        const search = async () => {
            await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term,
                },
            });
        };
        search();
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </div>
        </div>
    );
};

export default Search;
