import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedTerm,
                        target: language.value,
                        key: process.env.REACT_APP_API_KEY,
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedTerm]);

    return (
        <div>
            <h1 className="ui heder">{translated}</h1>
        </div>
    );
};

export default Convert;
